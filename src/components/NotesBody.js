import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

const NotesBody = () => {
  const Allnotes = useContext(NoteContext);
  const { notes } = Allnotes;
  const colors = [
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "primary",
  ];
  console.log(notes);
  console.log("body");

  return (
    <div className="row " style={{ textAlign: "center" }}>
      <h2
        style={{
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        Your notes
      </h2>
      {notes.map((note, index) => {
        // Use the modulo operator to cycle through colors
        const clr = colors[index % colors.length];
        return <Notes key={index} note={note} clr={clr} />;
      })}
    </div>
  );
};

export default NotesBody;
