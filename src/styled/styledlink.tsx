import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink) `
  color: lightgray;
  display: flex;
  font-family: Tahoma;
  font-variant: small-caps;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 60px;
  
  &:hover {
    color: red;
  }

  &.active {
    color: white;
    font-variant: initial;
  }
`;

export { StyledLink }