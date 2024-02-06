import Square from "./Square";

interface parameterCallback {
    squares: (string | null)[],
    position: (number | null)[]
}

interface tipeDataParameter {
    xIsNext: boolean,
    squares: (string | null)[],
    onPlay: (a: parameterCallback) => void
}

const coordinates = [
    [1, 1], [1, 2], [1, 3],
    [4, 4], [4, 5], [4, 6],
    [7, 7], [7, 8], [7, 9],
];

function Board({xIsNext, squares, onPlay}: tipeDataParameter) {
    const winner = calculatorWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner.player}`;
        console.log(winner.highlightSquares);
    } else if (squares.every((value) => value !== null)) {
        status = "Draw";
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    function handleClick(i: number) {
        if (squares[i] || calculatorWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = (xIsNext) ? "X" : "O";
        onPlay({ squares: nextSquares, position: coordinates[i]});
    }

    const squaresElement = squares.map((square, index) => {
        if (winner?.highlightSquares.find((position) => position === index) !== undefined) {
            return <Square key={index} value={square} highlight={true} onSquareClick={() => handleClick(index)} />
        }

        return <Square key={index} value={square} onSquareClick={() => handleClick(index)} />;
    });

    return (
        <div>
            <p className="text-xl font-bold mb-2">{status}</p>
            <div className="grid grid-cols-3 w-fit">
                {squaresElement}
            </div>
        </div>
    );
}

function calculatorWinner(squares: (string | null)[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i: number = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { player: squares[a], highlightSquares: lines[i]};
        }
    }

    return null;
}

export default Board;