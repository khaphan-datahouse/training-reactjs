import { useState } from "react";
import Button from "../common/Button"
import TimerForm from "../TimerForm";


const ToggleableTimerForm = ({onSubmit, onResetAll, onRemoveAll, onStartAll, onStopAll}) => {
  const [isRenderForm, setIsRenderForm] = useState(false);

  const handleToggleForm = () => {
    setIsRenderForm(!isRenderForm);
  }

  const handleSubmit = (data) => {
    onSubmit(data);
    handleToggleForm();
  }


  if (isRenderForm)
    return <TimerForm onCancel={handleToggleForm} onSubmit={handleSubmit}></TimerForm>

  return ( 
    <div>
      <Button onClick={handleToggleForm} className={'btn-add'}>+</Button>
      <Button onClick={onResetAll} className={'btn-add'}>Reset all</Button>
      <Button onClick={onStartAll} className={'btn-add'}>Start all</Button>
      <Button onClick={onStopAll} className={'btn-add'}>Stop all</Button>
      <Button onClick={onRemoveAll} className={'btn-add'}>Remove all</Button>
    </div>
  )
}

export default ToggleableTimerForm