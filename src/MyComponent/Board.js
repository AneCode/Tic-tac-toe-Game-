import React from 'react';
import {Square} from './Square'
const style={
  border:'4px solid darkblue',
  borderRadius:'10px',
  width:'250px',
  height:'250px',
  margin:'0 auto',
  display:'grid',
   gridTemplate : 'repeat(3,1fr)/repeat(3,1fr)'

};
export const Board = ({Squares,onclick}) => {
    return (
        <div style={style}>
           { 
              Squares.map((squre,i)=>{
               return( <Square value={squre}  key={i} onclick={()=>{onclick(i)}}/>)
           })}  
    
        </div>
    )
}
