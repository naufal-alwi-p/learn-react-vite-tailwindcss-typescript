import { useState } from "react";
import Board from "./Board";
import ToggleButton from "./ToggleButton";

interface tipeDataHistory {
    squares: (string | null)[],
    position: (number | null)[]
}

function Game() {
    const initHistory: tipeDataHistory = { squares: Array(9).fill(null), position: [null, null]};


    const [history, setHistory] = useState([initHistory]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isDescending, setIsDescending] = useState(false);
    const xIsNext = currentMove % 2 === 0;

    const currentSquares = history[currentMove].squares;

    function handlePlay(nextSquares: {squares: (string | null)[], position: (number | null)[]}) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move === currentMove) {
            description = (currentMove === 0) ? `You are at move #${move}` : `You are at move #${move} {${squares.position[0]}, ${squares.position[1]}}`;

            return (
                <li key={move} className="my-2">
                    {description}
                </li>
            );
        } else if (move > 0) {
            description = `Go to move #${move} {${squares.position[0]}, ${squares.position[1]}}`;
        } else {
            description = "Go to game start";
        }

        return (
            <li key={move} className="my-2">
                <button className="px-5 py-1 rounded-xl bg-stone-300" onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <>
            <h1 className="text-4xl font-bold my-2">Tic-Tac-Toe</h1>
            <div className="flex flex-wrap gap-8 content-start">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                <div>
                    <h2 className="text-2xl font-bold">History</h2>
                    <ol className="list-inside list-disc">
                        {isDescending ? moves.reverse() : moves}
                    </ol>
                </div>
                <ToggleButton isDescending={isDescending} handleClick={() => setIsDescending(!isDescending)} />
            </div>
        </>
    );
}

export default Game;