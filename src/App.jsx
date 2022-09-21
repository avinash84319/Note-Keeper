import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

function note(c){
    
    return <Note 
        title = {c.title}
        content = {c.content}
    />
    
}
function App() {
    const[addnote,setaddnote]=useState({
        title:"",
        content:""
    });
    const[note1,setnote1]=useState(notes);
    function handleChange(event){
        const value=event.target.value;
        const name=event.target.name;
        setaddnote(prevaddnotes=>{
            if(name=="title"){
                return { 
                    title:value,
                    content:prevaddnotes.content
                }
            }
            else{
               return {
                    title:prevaddnotes.title,
                    content:value
                }
            }
            }
        );
    }
    function handleClick(event){
        setnote1(
           [ ...note1,...[addnote]]
        )
        
    }
   


    
return <div>
    <Header />
    <form>
    <input onChange={handleChange} type="textarea" placeholder="title" name="title" value={addnote.title}></input>
    <textarea onChange={handleChange}  placeholder="content" name="content" value={addnote.content}></textarea>
    <button onClick={handleClick} type="button">+</button>
    </form>
    {note1.map(note)}
    <Footer />
</div>
}

export default App;
