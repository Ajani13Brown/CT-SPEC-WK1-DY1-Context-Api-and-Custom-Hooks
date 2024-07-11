import React, { useContext } from 'react'
import   ContactsContext  from '../context/contacts';



const DisplayContacts = () => {
    const {contacts,selectContact,selectedContact} = useContext(ContactsContext);
  return (
    <div>
        <h4>Contacts List</h4>
        <ul>
        {contacts.map((contact,index) => (
            <li key={index} onClick= {()=>selectContact(contact)}>{contact.name}</li>
        ))}
        </ul>

        {selectedContact && (
        <p>Selected Contact: {selectedContact.name}</p>
      )}

    </div>
  );
};

export default DisplayContacts
