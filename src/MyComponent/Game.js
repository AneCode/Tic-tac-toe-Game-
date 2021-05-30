import React,{useState} from 'react';
import { Board } from './Board.js'
import {calculatefunction} from './helper'
 
export default function Game() {
    const styles={
         width:'200px',
         margin:'20px auto'
    }
    const [board, setboard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner=calculatefunction(board);

    let handleclick=(i)=>{
      
      const boardcopy=[...board]; 
    //  If user get won  or occupied square return 
    if(winner||boardcopy[i]) return ; 
    // Put an X or O in square
     boardcopy[i]=xIsNext ? 'X': 'O';
     setboard(boardcopy);
     setXisNext(!xIsNext);
    }
    const jumpto=()=>{

    } 
    const renderMoves=()=>{
     
      return(
       <button onClick={()=>{
           setboard(Array(9).fill(null))
       }}>StartGame</button>
      )  
    }

    return (
        <>
       <Board Squares={board}  onclick={handleclick}/>
       <div style={styles}>
           <p>{ winner ? 'winner:'+winner :'NextPlayer'+ (xIsNext ? 'X' :'O') }</p>
           {renderMoves()}
       </div>
       </>
    )
}
