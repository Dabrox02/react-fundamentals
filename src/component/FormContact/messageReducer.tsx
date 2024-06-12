export const SELECT_CONTACT = 'SELECT_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

interface SelectContactAction {
    type: typeof SELECT_CONTACT;
    selectedId: number;
}

interface EditedContactAction {
    type: typeof EDIT_CONTACT;
    message: string;
}

export type ContactActionTypes = SelectContactAction | EditedContactAction;

export interface Contact {
    id: number;
    name: string;
    email: string;
}

export const initialState = {
    selectedId: 0,
    messages: {
        0: 'hola 1',
        1: 'hola 2',
        2: 'hola 3',
    },
};

export const messageReducer = (state: any, action: ContactActionTypes) => {
    switch (action.type) {
        case SELECT_CONTACT: {
            return {
                ...state,
                selectedId: action.selectedId,
            }
        }
        case EDIT_CONTACT: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            }
        }

        default: {
            throw Error('Unknown action: ' + JSON.stringify(action));
        }
    }
}
