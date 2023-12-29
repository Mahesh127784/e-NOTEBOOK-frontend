import React from "react";
import DeleteNDedit from "./DeleteNDedit";

const Notes = (props) => {
  const { title, tags, description, date } = props.note;
  const style = { maxWidth: "18rem" };

  return (
    <div className={`card  text-bg-${props.clr} mb-3 mx-4 my-3`} style={style}>
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body ">
        <p className="card-text">{description}</p>
        <p className="card-text">-{tags ? tags : "general"}-</p>
        <p className="card-text">
          <small className="text-muted">{date} </small>
        </p>
        <DeleteNDedit updateNote={props.updateNote} note={props.note} />
      </div>
    </div>
  );
};

export default Notes;
