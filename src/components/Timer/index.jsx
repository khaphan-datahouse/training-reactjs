import { millisecondsToHuman } from "../../utils/TimerUtils";
import Button from "../common/Button";
import { event_flags } from "../../GlobalValues/EventFlag.json";
import './style.css';

const Timer = ({data, onEventTimer}) => {

  return (
    <div className="timer">
      <p className="title">{data.title}</p>
      <p className="project">{data.project}</p>
      <p className="time">{millisecondsToHuman(data.timer)}</p>

      <div>
        <Button className="btn-primary" onClick = {() => onEventTimer(event_flags.edit)}>Edit</Button>
        <Button className="btn-danger" onClick = {() => onEventTimer(event_flags.remove)}>Remove</Button>
      </div>

      <Button className={data.isRunning ? "btn-success" : "btn-warning"} onClick = {() => onEventTimer(event_flags.start_stop)}>{data.isRunning ? "Stop" : "Start"}</Button>
    </div>
  )
}

export default Timer;