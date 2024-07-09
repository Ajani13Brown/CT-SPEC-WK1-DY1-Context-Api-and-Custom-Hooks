import React, { useContext } from 'react'
import ContactsContext from '../context/contacts';



const DisplayContacts = () => {
const [contacts,selectContact] = useContext();
  return (
    <div>
        <h1>Contacts List</h1>
        <ul>
        {contacts.map((contact,index) => (
            <li key={index} onclick= {()=>selectContact(contact)}>{contact.name}</li>
        ))}
        {console.log(selectContact)}
        </ul>

    </div>
  );
};

export default DisplayContacts
