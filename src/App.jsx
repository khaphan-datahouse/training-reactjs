import { useEffect, useState } from 'react';
import './App.css';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { newTimer } from './utils/TimerUtils';
import { event_flags } from "./GlobalValues/EventFlag.json";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      project: 'Intership',
      title: 'Learning React',
      timer: 0,
      isRunning: true,
      isEdit: false,
    },
    {
      id: 2,
      project: 'Xagoe',
      title: 'Dont Know',
      timer: 0,
      isRunning: false,
      isEdit: false,
    }
  ]);

  useEffect(() => {
    let timers = setTimeout(() => {
      const newData = data.map(timer => {
        if (!timer.isRunning) return timer;
  
        return {
          ...timer,
          timer: timer.timer + 1000
        }
      });
      setData(newData);
    }, 1000);

    //Cleanup function
    return () => {
      clearTimeout(timers);
    }
  }, [data])

  const handleCreateTimer = (newData) => {
    const nTimer = newTimer(newData);
    setData(data.concat(nTimer));
  }

  const handleToggleTimer = (id) => {
    const newData = data.map(timer => {
      if (timer.id !== id) return timer;

      return {
        ...timer,
        isEdit: !timer.isEdit
      }
    });

    setData(newData);
  };

  const handleUpdateTimer = (newData) => {
    const updatedData = data.map(timer => {
      if (timer.id !== newData.id) return timer;

      return {
        ...timer,
        isEdit: false,
        title: newData.title,
        project: newData.project
      }
    });

    setData(updatedData);
  }

  const handleEventTimer = (id, flag) => {
    switch(flag) {
      case event_flags.start_stop:
        setData(data.map(timer => {
          if (timer.id !== id) return timer;
          return {
            ...timer,
            isRunning: !timer.isRunning,
          }
        }));
        break;
      case event_flags.edit:
        setData(data.map(timer => {
          if (timer.id !== id) return timer;
          return {
            ...timer,
            isEdit: true,
          }
        }));
        break;
      case event_flags.remove:
        setData(data.filter(timer => timer.id !== id));
        break;
      default: return
    }
  }

  const handleRemoveAll = () => {
    setData([]);
  } 

  const handleResetAll = () => {
    const newData = data.map(timer => {
      return {
        ...timer,
        timer: 0,
        isRunning: false
      }
    });

    setData(newData);
  }

  const handleStartAll = () => {
    const newData = data.map(timer => {
      return {
        ...timer,
        isRunning: true
      }
    });

    setData(newData);
  }

  const handleStopAll = () => {
    const newData = data.map(timer => {
      return {
        ...timer,
        isRunning: false
      }
    });

    setData(newData);
  }

  return (
    <div className='App'>
      <h1>Timers</h1>

      <ToggleableTimerForm 
        onSubmit={handleCreateTimer}
        onResetAll={handleResetAll}
        onRemoveAll={handleRemoveAll}
        onStartAll={handleStartAll}
        onStopAll={handleStopAll}
      ></ToggleableTimerForm>

      {data.map(timer => {
        return <EditableTimer 
          key={timer.id}
          data={timer} 
          onToggleTimer={handleToggleTimer} 
          onSubmit={handleUpdateTimer} 
          onEventTimer={handleEventTimer}
        ></EditableTimer>
      })}
    </div>
  );
}

export default App;
