import React, { useContext, useEffect, useState, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import AlertContaxt from "../context/alert/AlertContext";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";

const NotesBody = () => {
  const navigate = useNavigate();
  const Allnotes = useContext(NoteContext);
  const { showAlert } = useContext(AlertContaxt);

  const { notes, getnote, editnote } = Allnotes;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tags: "general",
  });

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

  useEffect(() => {
    try {
      if (localStorage.getItem("token")) getnote();
      else navigate("/login");
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    ref.current.click();
    setNote(note);
  };
  const ref = useRef(null);
  const refClose = useRef(null);

  const onchange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setNote({ ...note, description: value });
    } else {
      setNote({ ...note, [name]: value });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    editnote(note);
    showAlert("Your note has been updated", "success");
    refClose.current.click();
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <form action="">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
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
                    value={note.description}
                    onChange={onchange}
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">
                    Tags
                  </label>
                  <input
                    value={note.tags}
                    onChange={onchange}
                    type="text"
                    className="form-control"
                    id="tags"
                    name="tags"
                    placeholder="Add tags"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.title.length < 3 || note.description.length < 5}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row " style={{ textAlign: "center" }}>
        <h2
          style={{
            marginBottom: "20px",
            textDecoration: "underline",
            color: "maroon",
          }}
        >
          Your notes
        </h2>
        <div style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>
          {" "}
          {notes.length === 0 && "Make a note to display here"}
        </div>
        {notes.map((note, index) => {
          // Use the modulo operator to cycle through colors
          const clr = colors[index % colors.length];
          return (
            <Notes updateNote={updateNote} key={index} note={note} clr={clr} />
          );
        })}
      </div>
    </>
  );
};

export default NotesBody;
