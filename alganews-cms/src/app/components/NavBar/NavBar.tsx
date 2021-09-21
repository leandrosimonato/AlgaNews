import { NavLink } from 'react-router-dom';
import * as NAV from './NavBar.styles';

export default function NavBar() {
  return (
    <>
      <NAV.List>
        <NAV.Item>
          <NavLink exact to='/'>
            início
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/editores'>
            Editores
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/contato'>
            portfólio
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/contato'>
            storage
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/contato'>
            usuários
          </NavLink>
        </NAV.Item>
      </NAV.List>
    </>
  );
}
