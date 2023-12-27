import AddNote from "./AddNote";
import NotesBody from "./NotesBody";

export default function Home() {
  return (
    <>
      <div>
        <AddNote />
      </div>
      <div style={{ margin: "-15px", marginTop: "30px" }}>
        <NotesBody />
      </div>
    </>
  );
}
