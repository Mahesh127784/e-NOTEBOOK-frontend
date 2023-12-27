import React, { useContext } from "react";
import NoteContaxt from "../context/notes/NoteContext";

const DeleteNDedit = (props) => {
  const { deletenote, editnote } = useContext(NoteContaxt);

  const handleEdit = (id) => {
    editnote(id);
  };
  const handleDelete = (id) => {
    deletenote(id);
  };
  const { note } = props;
  return (
    <div>
      <i
        onClick={() => handleEdit(note._id)}
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
