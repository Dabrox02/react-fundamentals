import { EDIT_CONTACT } from "./messageReducer";

export default function Chat({ contact, message, dispatch }: any) {
    return (<>
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chatear con ' + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: EDIT_CONTACT,
                        message: e.currentTarget.value
                    })
                }}
            ></textarea>
        </section>
    </>);
}