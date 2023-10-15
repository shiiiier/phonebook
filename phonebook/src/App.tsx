import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import Header from "./components/Header";

function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    // Using fetch to fetch the api from flask server it will be redirected to proxy
    fetch('./api/data').then(
      response => response.json()
      ).then(
        data => {
        // Setting a data from api
          setData(data)
          console.log(data)
        }
      )
  }, [])

  return (
    <div>
      <Header />
    </div>
    )
}

export default App;
