import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

function note(c){
    return <Note 
        key = {c.id}
        title = {c.title}
        content = {c.content}
    />
    
}
function App() {
return <div>
    <Header />
    {notes.map(note)}
    <Footer />
</div>
}

export default App;
