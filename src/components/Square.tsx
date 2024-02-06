function Square({ value, highlight = false, onSquareClick }: { value: string | null, highlight?: boolean, onSquareClick: () => void }) {
    
    const classProps = highlight ? "px-3 w-12 h-12 text-3xl font-bold border bg-green-500" : "px-3 w-12 h-12 text-3xl font-bold border";

    return <button className={classProps} onClick={onSquareClick}>{value}</button>;
}

export default Square;