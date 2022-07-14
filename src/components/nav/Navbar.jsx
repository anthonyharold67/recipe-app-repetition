import Nav, { Logo, Menu, MenuLink, Hamburger } from './Navbar.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const Navbar = ({user,setUser}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    sessionStorage.clear();
    setUser(false);
  }

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{'<Clarusway/>'}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        {user ? <MenuLink to="login" onClick={handleClick}>
          Logout
        </MenuLink> : <MenuLink to="login">Login</MenuLink>}
      </Menu>
    </Nav>
  );
};

export default Navbar;
