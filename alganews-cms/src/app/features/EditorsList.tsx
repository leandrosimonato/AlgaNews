import styled from 'styled-components';
import Profile from '../components/Profile';


export default function EditorsList() {
  return (
    <EditorsListWrapper>
      <Profile name="Leandro Simonato" description="Programador há 1 ano" />
      <Profile name="Ana Carolina" description="Programador há 1 ano" />
      <Profile name="Antonella" description="Programador há 5 ano" />
      <Profile name="Henrique" description="Programador há 6 ano" />
      <Profile name="Rafael Borges" description="Programador há 10 ano" />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
