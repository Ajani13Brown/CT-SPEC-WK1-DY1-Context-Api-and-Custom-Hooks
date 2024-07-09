import { createContext } from "react";

const ContactsContext = createContext({
    contacts:[],
    selectedContact: null,
    selectContact:() =>{}
})

export default ContactsContext;
