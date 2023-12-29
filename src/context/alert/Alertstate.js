import AlertContaxt from "./AlertContext";
import { useState } from "react";

export default function AlertState(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, clr) => {
    setAlert({
      message,
      clr,
    });
    console.log(alert);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <AlertContaxt.Provider value={{ showAlert, alert }}>
      {props.children}
    </AlertContaxt.Provider>
  );
}
