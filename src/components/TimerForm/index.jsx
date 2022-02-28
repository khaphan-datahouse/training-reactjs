import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import './style.css'

const TimerForm = ({data, onCancel, onSubmit}) => {
  const [title, setTitle] = useState(data?.title);
  const [project, setProject] = useState(data?.project);

  const handleSubmit = () => {
    onSubmit({title, project, id: data?.id || null});
  };

  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleSetProject = (e) => {
    setProject(e.target.value);
  }

  return (
    <div className="timerForm">
      <Input placeholder="Title" label='Title' value={title} onChange={handleSetTitle}></Input>
      <Input placeholder="Project" label='Project'  value={project} onChange={handleSetProject}></Input>

      <Button className="btn-primary" onClick={onCancel}>Cancel</Button>
      <Button className="btn-danger" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default TimerForm;