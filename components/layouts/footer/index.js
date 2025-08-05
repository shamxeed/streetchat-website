import { Container, CopyRight, Privacy, Developer } from './misc';

export function Footer() {
  return (
    <Container>
      <div className='flex flex-col items-center md:flex-row'>
        <CopyRight />

        <Privacy />
      </div>

      <Developer />
    </Container>
  );
}
