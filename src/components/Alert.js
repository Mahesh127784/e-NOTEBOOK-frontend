import React, { useContext } from "react";
import AlertContaxt from "../context/alert/AlertContext";

function Alert() {
  const alert = useContext(AlertContaxt);
  console.log(alert);
  return (
    <>
      {/* <div style={{ height: "60px" }}> */}
      {alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      {/* </div> */}
    </>
  );
}

export default Alert;
