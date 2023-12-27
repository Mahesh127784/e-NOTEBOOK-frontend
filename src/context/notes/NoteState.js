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
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const resp = await response.json();
    if (resp.title) setNotes(notes.concat(resp));
  }

  //function for delete notes
  async function deletenote(id) {
    const respons = await fetch(`${port}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
    });
    const responses = await respons.json();
    const delet = notes.filter((elem) => {
      return elem._id !== id;
    });
    setNotes(delet);
  }

  //function for edit notes
  async function editnote(note) {
    const response = await fetch(`${port}/api/notes/noteupdate/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
      body: JSON.stringify({
        title: note.title,
        description: note.description,
        tags: note.tags,
      }),
    });
    const resp = await response.json();
    console.log(resp);
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
