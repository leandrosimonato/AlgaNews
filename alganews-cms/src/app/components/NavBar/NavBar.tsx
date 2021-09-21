import { Link } from 'react-router-dom';
import * as NAV from './NavBar.styles'

export default function NavBar() {
  return (
    <>
      <NAV.List>
        <NAV.Item>
          <Link to='/'>Home</Link>
        </NAV.Item>
        <NAV.Item>
          <Link to='/contato'>Contato</Link>
        </NAV.Item>
      </NAV.List>
    </>
  );
}

