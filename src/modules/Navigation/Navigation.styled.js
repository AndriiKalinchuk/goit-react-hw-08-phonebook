import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 400;

  &:hover,
  &:focus {
  }

  &.active {
    outline: none;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    color: darkblue;
    cursor: pointer;
  }
`;
