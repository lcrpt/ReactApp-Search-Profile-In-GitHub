import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h3>Notes</h3>
      <AddNote username={username} addNote={addNote} />
      <p>User: {username}</p>
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes;
