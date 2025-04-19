// import Libraries
import React from "react";
import Header from "./Header";
import List from "./List"
import Footer from "./Footer";
import "./App.css";
import Top from "./Top";
import Main from "./Main";


// Create Componnent 
function App() {
  return (
    <div className="App">
     <Header list = "10 daftar makanan "/>
     <Main/>
     <Top/>
     <List/>
     <Footer/>
    </div>
  );
}
// Export Default
export default App