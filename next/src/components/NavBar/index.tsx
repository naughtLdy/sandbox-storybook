import { FC } from 'react';
import './navbar.css';

export interface NavBarProps {
  companyName: string;
  disabledForm: boolean;
}

const NavBar: FC<NavBarProps> = ({ companyName, disabledForm }) => {
  return (
    <nav className="Navbar">
      <div className="Navbar__TeamName">{companyName}</div>
      <form className="Navbar__Form">
        <input
          className="Navbar__FormInput"
          placeholder="foo category:bar/baz comment:foobar"
          disabled={disabledForm}
        />
      </form>
    </nav>
  );
};

export default NavBar;
