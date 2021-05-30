import React from 'react'

export const Square = (props) => {
    const style={
          background:'lightblue',
          border:'2px solid darkblue',
          fontSize:'30px',
          fontWeight:'800',
          cursor:'pointer',
          outline:'none',
    }
     return (
       <>
       <button style={style}  onClick={props.onclick}>{props.value}</button>
       </>
    ) 
}
