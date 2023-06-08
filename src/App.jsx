import { useState } from 'react'
import './App.css'
import CreateArea from './components/CreateArea'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'


function App() {

  const [notes, setNotes] = useState([]);

  
  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className='bg-zinc-200 overflow-hidden'>
      <div className='min-h-screen'>
        <Header/>
        <div className='px-4 md:p-0'>
          <CreateArea
            onAdd={addNote}
          />
        </div>

        <div className='flex gap-2 flex-col md:flex-row max-w-5xl mx-auto px-4 md:p-0'>
          {notes.map((noteItem, index) => {
            return <Note 
              key={index}
              id={index}
              title={noteItem.title} 
              content={noteItem.content}
              onDelete={deleteNote}
              />
          })}
        </div>

      </div>
        <Footer/>
    </div>
  )
}

export default App
