import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import styled from 'styled-components';

function App() {
  return (
    <>
      <BackgroundHeading />

      <StyledMain></StyledMain>

      <Footer />
    </>
  );
}

export default App;

const StyledMain = styled.main`
  width: 972px;
  height: 636px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 7fr 4fr;
  grid-template-rows: 59px 1fr;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  /* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
`;
