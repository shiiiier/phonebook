import React,  { useReducer , FC } from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { ContactsReducer, AppState } from "./reducers/ContactsReducer";
// import { ContactList } from "./components/ContactList";

const initialState: AppState = {
  contacts: []
};

const App: FC = () => {

  // const [data, setData] = useState([{}]);
  const [state, dispatch] = useReducer(ContactsReducer, initialState);

  // useEffect(() => {
  //   // Using fetch to fetch the api from flask server it will be redirected to proxy
  //   fetch('http://localhost:5000/api/data').then(
  //     response => response.json()
  //     ).then(
  //       data => {
  //       // Setting a data from api
          
  //         setData(data)
  //         console.log(data)
  //       }
  //     ).catch(error => {
  //       console.error('Error fetching data', error)})
      
  // }, [])

  return (
    <>
      <div>
        <ContactForm dispatch={dispatch} />
        {/* {state.contacts.length > 0 && <ContactList contacts={state.contacts} />} */}
      </div>
    </>
  );
}

export default App;
