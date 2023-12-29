import React, { useContext } from "react";
import NoteContaxt from "../context/notes/NoteContext";
import AlertContaxt from "../context/alert/AlertContext";

const DeleteNDedit = (props) => {
  const { deletenote } = useContext(NoteContaxt);
  const { showAlert } = useContext(AlertContaxt);

  const handleDelete = (note) => {
    deletenote(note._id);
    showAlert(`Your note about ${note.title} has been deleted`, "danger");
  };
  const { note, updateNote } = props;
  return (
    <div>
      <i
        onClick={() => updateNote(note)}
        className="fa-solid fa-pen-to-square mx-3"
      ></i>
      <i
        onClick={() => handleDelete(note)}
        className="fa-solid fa-trash-can mx-4"
      ></i>
    </div>
  );
};

export default DeleteNDedit;
