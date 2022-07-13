import styled from 'styled-components';
import Flex from '../globalStyles/Flex';
import { Link } from 'react-router-dom';

const Nav = styled(Flex)`
    padding: 1rem 2rem;
    background: ${({theme})=> theme.colors.navbarBgColor};
`;

export const Logo = styled(Link)`
padding: 1rem 0;
color: ${({ theme }) => theme.colors.logoColor};
text-decoration: none;
font-weight: 800;
font-size: 2rem;
span {
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mainColor};
}
`
export const Menu = styled(Flex)`
@media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

`
export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
`

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }

`

export default Nav;

