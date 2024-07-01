import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E2E37] py-12 px-6 text-white">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="font-exo-2 font-bold text-2xl no-underline text-inherit">Creatorly AI</a>
        </Link>
        <ul className="list-none flex gap-12">
          {/* <li className="font-familjen-grotesk font-normal text-base">
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li> */}
          <li className="font-familjen-grotesk font-normal text-base">
            <Link href="https://x.com/rahulbathijaa" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
