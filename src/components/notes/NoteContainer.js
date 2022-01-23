import { Container } from "react-bootstrap";
import NotesList from "./NotesList"; 
import AddNote from "./AddNote";   
import Navigation from "../core/Navigation"


export default function NotesContainer() {
    return (
      <div>
        <Navigation />
        <Container className="px-5">
          <AddNote />
          <NotesList />
        </Container>
      </div>
    )
  }
