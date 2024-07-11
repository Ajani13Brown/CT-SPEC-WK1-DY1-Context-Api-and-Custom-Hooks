import React, { useContext } from 'react'
import ContactsContext from '../context/contacts'

const viewdetails = () => {
    const {selectedContact} = useContext(ContactsContext);
    if(!selectedContact){
        return<p>No Contact selected</p>;
    }
  return (
    <>
    <h4>Contact Details</h4>
    <p>Name: {selectedContact.name}</p>
    <p>Phone Number: {selectedContact.phone}</p>
    <p>Email Address: {selectedContact.email}</p>
    </>
  )
}

export default viewdetails