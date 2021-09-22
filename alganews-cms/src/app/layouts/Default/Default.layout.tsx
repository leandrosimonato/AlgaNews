import confirm from '../../../core/utils/confirm';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';
import SessionController from '../../components/SessionController';
import * as DL from './Default.layout.styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
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
            name='Daniel Bonifacio'
            description='editor há 2 anos'
            onLogout={() => {
              confirm({
                title: 'Voce quer delogar?',
                onConfirm: () => window.alert('Volte logo!'),
                onCancel: () => window.alert('Grandes poderes terá grandes responsabilidades!'),
              });
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
