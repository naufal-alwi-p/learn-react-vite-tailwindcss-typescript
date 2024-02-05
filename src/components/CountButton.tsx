import { useState } from "react";

export default function() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((count) => count + 1)} className="m-5 font-bold px-5 py-2 bg-lime-700 text-white rounded-full">
            Count: {count}
        </button>
    );
}