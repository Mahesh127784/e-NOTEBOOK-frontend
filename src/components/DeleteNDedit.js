import React, { useContext } from "react";
import NoteContaxt from "../context/notes/NoteContext";

const DeleteNDedit = (props) => {
  const { deletenote } = useContext(NoteContaxt);

  const handleDelete = (id) => {
    deletenote(id);
  };
  const { note, updateNote } = props;
  return (
    <div>
      <i
        onClick={() => updateNote(note)}
        className="fa-solid fa-pen-to-square mx-3"
      ></i>
      <i
        onClick={() => handleDelete(note._id)}
        className="fa-solid fa-trash-can mx-4"
      ></i>
    </div>
  );
};

export default DeleteNDedit;
