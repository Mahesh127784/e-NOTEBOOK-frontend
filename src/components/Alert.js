import React, { useContext } from "react";
import AlertContaxt from "../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContaxt);
  console.log(alert);
  return (
    <>
      <div style={{ height: "100px" }}>
        {alert && (
          <div
            style={{
              marginTop: "55px",
              position: "fixed",
              width: "100%",
              zIndex: 1,
            }}
            className={`alert alert-${alert.clr} alert-dismissible fade show`}
            role="alert"
          >
            {alert.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
    </>
  );
}

export default Alert;
