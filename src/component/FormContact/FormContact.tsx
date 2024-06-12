import { useReducer } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import { initialState, messageReducer } from './messageReducer';

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function FormContact() {
    const [state, dispatch] = useReducer(messageReducer, initialState);
    const message = state.messages[state.selectedId];
    const contact = contacts.find(c => c.id === state.selectedId);

    return (<>
        <ContactList contacts={contacts} dispatch={dispatch}></ContactList>
        <Chat message={message} contact={contact} dispatch={dispatch} />
    </>)
}