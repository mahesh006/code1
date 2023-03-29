import "./styles.css";

import React, {useState} from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [page, setPage] = useState("home");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, content};
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
    setPage("home");
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

const renderHome = () => {
  return(
    <div>
      <h1>My notes</h1>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.content.slice(0,50)}...</p>
          </div>
      )
        )}


    </div>
  );
};

const renderCreate = () => {
  return(
    <div>
      <h1>Create notes</h1>
      <form onSubmit ={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id ="title" name="title" value={title} onChange={handleTitleChange}/>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" value={content} onChange={handleContentChange}/>
      <button type='submit'>Create Note</button>
     </form>
    </div>
  );
};

return(
  <div>
    <nav>
      <button onClick ={() => handlePageChange("home")}>Home</button>
      <button onClick ={() => handlePageChange("create")}>create</button>
    
    </nav>
    {page === "home" && renderHome()}
    {page === "create" && renderCreate()}
  </div>
);

}

export default App;