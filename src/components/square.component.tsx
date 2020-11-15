import React from 'react';

type SquareProps = {
  onClick: () => void
  value: string
}

const Square = (props: SquareProps) => {
  return(
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square
