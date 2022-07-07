import React ,{useState} from "react";

function CreateArea() {
  const [note,setNote] = useState({
    title:"",
    content:""
  });
  function handleEvent(event)
  {
    const {name,value}=event.target;
    setNote(prevNote=>{
        return {
            
        }
    })
  }
  return (
    <div>
      <form>
        <input name="title" onChange={handleEvent} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleEvent} value={note.content} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;