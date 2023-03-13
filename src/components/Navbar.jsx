import React from 'react'
import Carro from './Carro'

const Navbar = () => {
  return (
    <div className="w-full bg-gray-700 fixed t-0">
    <div className="container sm bg-slate-300 mx-auto py-1 flex justify-between">
      <h1 className="text-orange-600 text-4xl font-bold">Hello</h1>
      <input type="text" className="w-96 px-2" placeholder="busca productos..."></input>
      <ul className="hidden flex w-96 bg-slate-600 font-bold justify-between text-yellow-200 sm:flex">
        <li>web</li>
        <li>web</li>
        <li>web</li>
      </ul>
      <Carro/>
    </div>
    </div>
  )
}

export default Navbar