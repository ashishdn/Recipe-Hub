import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto  flex justify-between items-center py-6  ">
          <div><h3 className="text-xl font-bold">Recipe Hub</h3></div>
      <div>
        <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <Link href="/signin">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Signin</button>
        </Link>
      </div>
    </div>
    </div>
  )
}
