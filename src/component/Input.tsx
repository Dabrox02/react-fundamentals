import { FormEvent, useState } from "react";

export default function Input() {
    const [value, setValue] = useState("");

    function handleInput(e: FormEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }

    return <>
        <input type="text" onInput={(e) => handleInput(e)} value={value} />
    </>
}