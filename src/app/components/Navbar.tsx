import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F0EAE0] py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="font-exo-2 font-bold text-2xl no-underline text-inherit">Creatorly AI</a>
        </Link>
        <ul className="list-none flex gap-6">
          {/* <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/pricing" legacyBehavior>
              <a>Pricing</a>
            </Link>
          </li> */}
          {/* <li className="font-familjen-grotesk font-normal text-base">
            <Link href="/login" legacyBehavior>
              <a>Try it out</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


