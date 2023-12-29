import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import AlertContaxt from "../context/alert/AlertContext";

function AddNote() {
  const { addnote } = useContext(NoteContext);
  const alert = useContext(AlertContaxt);

  const [note, setNote] = useState({ title: "", description: "", tags: "" });

  const style = {
    textDecoration: "underline",
    color: "maroon",
  };
  const inputstyle = { backgroundColor: "darkgrey" };

  const handleClick = (e) => {
    e.preventDefault();
    addnote(note);
    setNote({ title: "", description: "", tags: "" });
    alert.showAlert("confirmed");
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setNote({ ...note, description: value });
    } else {
      setNote({ ...note, [name]: value });
    }
  };

  return (
    <div>
      <h2 className="my-3" style={style}>
        Add a note:
      </h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            style={inputstyle}
            name="title"
            value={note.title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Add title "
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            style={inputstyle}
            value={note.description}
            onChange={onchange}
            className="form-control"
            id="description"
            name="description"
            rows="4"
            placeholder="Add a note "
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            style={inputstyle}
            value={note.tags}
            onChange={onchange}
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Add tags"
          />
        </div>
        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          onClick={handleClick}
          type="submit"
          className="btn btn-primary "
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
