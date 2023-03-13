import React from 'react'
import BubbleAlert from './BubbleAlert'

function Carro() {
  return (
    <div>
        <span className='relative left-2 top-3'>
            <BubbleAlert/>
        </span>
        <button className='bg-green-700 py-1 px-2 rounded text-neutral-50 text-xl'>
            carro
        </button>
    </div>
  )
}

export default Carro