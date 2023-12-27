import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const port = "http://localhost:5000";

  const arr = [];
  const [notes, setNotes] = useState(arr);
  console.log(arr);

  //function for get allnotes
  async function getnote() {
    //Api call
    const response = await fetch(`${port}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Contente-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
    });
    const responses = await response.json();
    console.log(responses);

    // console.log(arr);
    responses.forEach((respons) => {
      const Note = {
        _id: respons._id,
        title: respons.title,
        description: respons.description,
        tags: respons.tags,
        date: respons.date,
      };
      arr.push(Note);
    });
    // console.log(arr);
    setNotes(arr);
  }

  //function for add notes
  async function addnote(obj) {
    const { title, description, tags } = obj;
    //Api call
    const response = await fetch(`${port}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Contente-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
      body: JSON.stringify({ title, description, tags }),
    });
    console.log("adding a new note");
    const Note = {
      _id: "65854e9e5cf3eee178709955",
      title: obj.title,
      description: obj.description,
      tags: obj.tags,
      date: "2023-12-26T08:53:50.859Z",
    };
    setNotes(notes.concat(Note));
  }

  //function for delete notes
  function deletenote(id) {
    console.log(id);
    const delet = notes.filter((elem) => {
      return elem._id !== id;
    });
    setNotes(delet);
  }

  //function for edit notes
  async function editnote(id, obj) {
    const response = await fetch(`${port}/api/notes/fetchallnotes`, {
      method: "POST",
      headers: {
        "Contente-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NjU4NTQ0MTIzOGU5MjBkZmY1NzEwYjJi.xlkuEFFoLsxzkW_lspjdafpk8ZPADksAKx1qfQYYADM",
      },
      body: JSON.stringify({
        title: obj.title,
        description: obj.description,
        tags: obj.tags,
      }),
    });
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
