import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return <div className='app'>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click aqui</button>
        {count}
    </div>
}