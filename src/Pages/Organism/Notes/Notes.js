import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote } from './NotesRedux/Action';
import styles from './Notes.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { DashBoardContext } from '../../../Connector/Connector';

const Notes = ({ notesList, addNote, deleteNote }) => {
  const [noteText, setNoteText] = useState('');
  const { setWidgetComponents, widgetComponents } = useContext(DashBoardContext);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (noteText.trim().length > 0) {
        addNote(noteText);
        setNoteText('');
      }
    }
  };

  const handleNoteDelete = (index) => {
    deleteNote(index);
  };



  return (
    <>
      
       <div className={styles.title}>
        <h2 className={styles.titleName}>Notes</h2>
        </div>
      <div className={styles.container}>
        <p className={styles.heading}>Add notes...</p>
        <textarea
          className={styles.textarea}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ul className={styles.notesList}>
          {notesList.map((note, index) => (
            <li key={index}>
              <div className={styles.textContent}>
                <div className={styles.text}>{note}</div>
                <AiOutlineDelete className={styles.deleteIcon} onClick={() => handleNoteDelete(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    notesList: state.notes.notesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    deleteNote: (index) => dispatch(deleteNote(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
