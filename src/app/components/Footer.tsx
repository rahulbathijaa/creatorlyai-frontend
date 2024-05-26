import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">YT Creator Tools</a>
        </Link>
        <ul className="footer-links">
          {/* <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li> */}
          <li>
            <Link href="/pricing" legacyBehavior>
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
