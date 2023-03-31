import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section>
                <div onClick={() => setCount(count + 1)}>{count}</div>
            </section>
        </>
    );
}
