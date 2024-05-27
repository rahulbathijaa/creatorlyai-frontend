import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">YT Creator Tools</a>
        </Link>
        <ul className="nav-links">
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
          <li>
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
