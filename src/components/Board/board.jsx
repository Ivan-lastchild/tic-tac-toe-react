import React, { useState } from "react";
import Square from "../Squares/squares";
import "./styleBoard.css"



export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [oNext, setONext] = useState(true)

    function handleClick(i){
        const newSquares = squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        newSquares[i] = oNext ? "X" : "O"
        setONext(!oNext)
        setSquares(newSquares)
    }

    function renderSquare(i) {
        return <Square 
                    onClick ={()=> handleClick(i)}
                    value = {squares[i]}
                />
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    function resetGame(){
        setSquares(Array(9).fill(null))
    }

    return (
        <div className="gameField">
            {calculateWinner(squares) && <div className="fieldHeader">
                Player {calculateWinner(squares)} is winner
            </div>}
            <div className="rows">
                <div className="row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button
                className="newGameBtn"
                onClick={()=>resetGame()}
            >
                New game
            </button>
        </div>
    )
}