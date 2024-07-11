import React, { useState } from 'react'
import  ContactsContext  from './context/contacts'
import DisplayContacts from './Components/displayContacts';
import Viewdetails from './Components/viewdetails';
import useInventory from './Hooks/useInventory';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';





const App = () => {
const [contacts, setContacts] = useState([
  {name:"Ajani Brown", phone: "123-456-7890", email:"ajbrown@gmail.com"},
  {name:"Joshua Martinez", phone: "555-555-5555", email:"JoshuaM@gmail.com"},
  {name:"Noach Perman", phone: "098-765-4321", email: "The G.O.A.T@hotmail.com"},
  {name: "Christian Sachs", phone: "851-324-1895", email: "Christian.S@CodingTemple.com"}
]);

const [selectedContact, setSelectedContact] = useState(null);

const selectContact= (contact) =>{
  setSelectedContact(contact);
}


  return (
    <ContactsContext.Provider value={{ contacts, selectContact, selectedContact }}>
      <h2>Context Api</h2>
      <DisplayContacts/>
      <Viewdetails/>
      <hr></hr>
      <h2>Custom Hooks</h2>
      <ProductList/>
      <ProductForm/>
    </ContactsContext.Provider>
  )
}

export default App