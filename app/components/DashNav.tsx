import Link from "next/link";
import React from "react";

const DashNav = () => {
  return (
    <nav className='bg-black text-white py-4'>
      <div className='container mx-auto flex justify-center'>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/hub' className='hover:text-yellow-400'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/hub/leaderboard' className='hover:text-yellow-400'>
              Leaderboard
            </Link>
          </li>
          <li>
            <Link href='/hub/teams' className='hover:text-yellow-400'>
              Teams
            </Link>
          </li>
          <li>
            <Link href='/hub/my-profile' className='hover:text-yellow-400'>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashNav;
