import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const port = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  //function for get allnotes
  async function getnote() {
    //Api call
    const response = await fetch(`${port}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const responses = await response.json();
    setNotes(responses);
  }

  //function for add notes
  async function addnote(obj) {
    const { title, description, tags } = obj;
    //Api call
    const response = await fetch(`${port}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const resp = await response.json();
    if (resp.title && resp.description) setNotes(notes.concat(resp));
  }

  //function for delete notes
  async function deletenote(id) {
    const respons = await fetch(`${port}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    await respons.json();
    const delet = notes.filter((elem) => {
      return elem._id !== id;
    });
    setNotes(delet);
  }

  //function for edit notes
  async function editnote(note) {
    const { title, description, tags, _id } = note;
    const response = await fetch(`${port}/api/notes/noteupdate/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tags }),
    });
    await response.json();

    // update on client side
    const updatedNotes = notes.map((element) => {
      if (element._id === _id) {
        return { ...element, title, description, tags };
      } else {
        return element;
      }
    });
    setNotes(updatedNotes);
  }

  return (
    <NoteContext.Provider
      value={{ notes, addnote, getnote, deletenote, editnote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
