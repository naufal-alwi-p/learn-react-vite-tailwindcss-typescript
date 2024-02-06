import { useState } from "react";

function CountButton() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)} className="ml-2 px-5 py-2 bg-lime-700 text-white rounded-full">
            Count: {count}
        </button>
    );
}

export default CountButton;
