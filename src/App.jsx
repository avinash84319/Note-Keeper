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
    const[addnote,setaddnote]=useState([]);
    function handleChange(event){
        const value=event.target.value;
        const name=event.target.name;
        setaddnote(
            function da(){
            const prevaddnotes = addnote;
            if(name==title){
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

    
return <div>
    <Header />
    <form>
    <input onChange={handleChange} type="textarea" placeholder="title" name="title"></input>
    <input onChange={handleChange} type="textarea" placeholder="content" name="content"></input>
    <button>+</button>
    </form>
    {addnote.map(note)}
    <Footer />
</div>
}

export default App;
