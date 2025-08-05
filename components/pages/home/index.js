import { Container, Title, Badges, ChatImage } from './misc';

const HomePage = () => {
  return (
    <Container>
      <div className='md:max-w-8/12'>
        <Title />

        <Badges />
      </div>

      <ChatImage />
    </Container>
  );
};

export default HomePage;
