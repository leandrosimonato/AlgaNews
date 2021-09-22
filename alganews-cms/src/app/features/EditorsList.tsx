import styled from 'styled-components';
import Profile from '../components/Profile';

export default function EditorsList() {
  return (
    <EditorsListWrapper>
      <Profile
        editorId={1}
        name='Leandro Simonato'
        description='editor há 8 anos'
      />
      <Profile
        editorId={2}
        name='Ana Carolina'
        description='editor há 2 anos'
      />
      <Profile editorId={3} name='Antonella' description='editor há 2 anos' />
      <Profile editorId={4} name='Henrique' description='editora há 6 anos' />
      <Profile editorId={5} name='Rafael Borges' description='editor há 2 meses' />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
