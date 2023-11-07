import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const hoverStyle = { color: '#7E0ACB' };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-12 bg-transparent z-10">
      <div className='text-3xl'>Long Tang</div>
      <ul className="flex text-xl">
        <li className="mx-4 hover:text-purple-600">
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li className="mx-4  hover:text-purple-600">
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li className="mx-4  hover:text-purple-600">
          <Link href="/projects" passHref>
            Projects
          </Link>
        </li>
        <li className="mx-4  hover:text-purple-600">
          <Link href="/research" passHref>
            Research
          </Link>
        </li>
        <li className="mx-4  hover:text-purple-600">
          <Link href="/contact" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
