import { Dispatch } from "react";
import { Contact, ContactActionTypes, SELECT_CONTACT } from "./messageReducer";


export interface ContactProps {
    contacts: Contact[];
    dispatch: Dispatch<ContactActionTypes>;
}

export default function ContactList({ contacts, dispatch }: ContactProps) {
    return (<>
        <ul>
            {
                contacts.map((el) => {
                    return <li key={el.id}>
                        <button onClick={() => {
                            dispatch({
                                type: SELECT_CONTACT,
                                selectedId: el.id,
                            })
                        }}>{el.name}</button>
                    </li>
                })
            }
        </ul>
    </>)
}