import tw from 'tailwind-styled-components';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListPage from './pages/List/ListPage';

const Container = tw.div`
  w-screen
  h-screen
  md:w-auto 
  bg-primary
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <ListPage />
        <Footer />
      </Container >
    </>
  );
}

export default App;
