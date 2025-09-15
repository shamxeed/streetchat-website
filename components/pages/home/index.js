import { Main, Container, Title, Badges, ChatImage, Feature } from './misc';

const HomePage = () => {
  return (
    <Main>
      <Container>
        <div className='md:max-w-8/12'>
          <Title />

          <Badges />
        </div>

        <ChatImage />
      </Container>

      <Feature />
    </Main>
  );
};

export default HomePage;
