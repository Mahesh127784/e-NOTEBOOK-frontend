import AlertContaxt from "./AlertContext";
import { useState } from "react";

export default function AlertState(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <AlertContaxt.Provider value={{ showAlert, alert }}>
      {props.children}
    </AlertContaxt.Provider>
  );
}
