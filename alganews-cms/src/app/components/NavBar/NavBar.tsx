import { NavLink } from 'react-router-dom';
import * as NAV from './NavBar.styles'

export default function NavBar() {
  return (
    <>
      <NAV.List>
        <NAV.Item>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/contato'>
            Contato
          </NavLink>
        </NAV.Item>
      </NAV.List>
    </>
  );
}

