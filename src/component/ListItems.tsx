import { useState } from "react"

export default function ListItems() {
    const [items, setItems] = useState([
        "elemento1", "elemento2", "elemento3"
    ])

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => setItems(items.filter(it => it !== item))}>
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
}