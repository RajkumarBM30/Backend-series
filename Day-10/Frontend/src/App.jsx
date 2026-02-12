import { useState , useEffect } from 'react'
import axios from 'axios'




function App() {
   
  const [notes, setNotes] = useState([])

  console.log("hello world")
  
  function fetchNotes(){
     axios.get('http://localhost:3000/notes')
     .then((res)=>{
      setNotes(res.data.note)
  })

  }

  useEffect(()=>{
   fetchNotes()

  },[])
  
  function handleSubmit(e){
    e.preventDefault()

    const {title, description} = e.target.elements
    console.log(title.value, description.value)

    axios.post('http://localhost:3000/notes', {
      title: title.value,
      description: description.value
     })
     .then((res)=>{
      console.log(res.data)
      fetchNotes()
    })
  }

   function handleDelete(noteid){
     axios.delete(`http://localhost:3000/notes/${noteid}`)
     .then((res)=>{
       console.log(res.data)
       fetchNotes()
      })
  }
  return (
    <>
    <form action="" className="note-create-form" onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder='Enter note title' />
      <input name="description" type="text" placeholder='Enter note description'/>
      <button type='submit'>Create Note</button>

    </form>

    <div className="notes">
      {
        notes.map(note => {
          return (
            <div className="note">
               <h1>{note.title}</h1>
               <p>{note.description}</p>
               <button onClick={()=>handleDelete(note._id)} type='button'>Delete</button>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default App
