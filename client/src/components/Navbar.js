
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <navbar className="border-b-4 border-green-600 text-center bg-green-600 fixed top-0 text-white font-bold w-full text-lg">
          <ul>
            <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8' >Home</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/About" className='pl-6 pr-8' >About</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/article-list" className='pl-6 pr-8' >Articles-List</Link>
            </li>
           
          </ul>
        </navbar>
    </div>
  )
}

export default Navbar