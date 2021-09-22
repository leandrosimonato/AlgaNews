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
            Artigos
          </NavLink>
        </NAV.Item>
        <NAV.Item>
          <NavLink exact to='/posts/criar'>
            portfólio
          </NavLink>
        </NAV.Item>
      </NAV.List>
    </>
  );
}
