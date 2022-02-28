import Timer from "../Timer";
import TimerForm from "../TimerForm";
import { event_flags } from "../../GlobalValues/EventFlag.json";

const EditableTimer = ({data, onToggleTimer, onSubmit, onEventTimer, ...props}) => {
  const isEdit = data.isEdit;

  const handleToggle = () => {
    onToggleTimer(data.id);
  }

  const handleSubmitTimer = (data) => {
    onSubmit(data);
  }

  const handleEventTimer = (flag) => {
    switch (flag) {
      case event_flags.start_stop: onEventTimer(data.id, event_flags.start_stop); break;
      case event_flags.edit: onEventTimer(data.id, event_flags.edit); break;
      case event_flags.remove: onEventTimer(data.id, event_flags.remove); break;
      default: break
    }
  }

  if (isEdit) {
    return <TimerForm data={data} onCancel={handleToggle} onSubmit={handleSubmitTimer}></TimerForm>
  }

  return <Timer 
      data={data} 
      onEventTimer={handleEventTimer}
    >
    </Timer>
}

export default EditableTimer;