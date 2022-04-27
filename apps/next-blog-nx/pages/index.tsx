import styled from 'styled-components';
import { Button } from '@nx-demo/components';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <h2>Hi Chat!</h2>
      <p>Nx is pretty neat!</p>
      <Button />
    </StyledPage>
  );
}

export default Index;
