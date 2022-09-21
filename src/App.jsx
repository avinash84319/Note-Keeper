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
