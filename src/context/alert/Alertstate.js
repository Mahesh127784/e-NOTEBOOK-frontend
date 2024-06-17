import AlertContaxt from "./AlertContext";
import { useState } from "react";

export default function AlertState(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, clr) => {
    setAlert({
      message,
      clr,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <AlertContaxt.Provider value={{ showAlert, alert }}>
      {props.children}
    </AlertContaxt.Provider>
  );
}
