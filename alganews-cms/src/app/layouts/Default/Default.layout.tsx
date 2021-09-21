import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';
import SessionController from '../../components/SessionController';
import * as DL from './Default.layout.styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayoyt(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name='Leandro Simonato'
            description='Programador há 1 ano.'
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayoyt;
