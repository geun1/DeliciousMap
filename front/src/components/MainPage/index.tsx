import styled from 'styled-components'
import MainContent from '../MainContent';
import MainHeader from '../MainHeader';
import Mapping from './map';


interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (<Container>
    <Main>
      <MainHeader/>
      <MainContent />
    </Main>
    {/* <Mapping/> */}
  </Container>)
}

export default MainPage;

const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  background: #dfe4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.section`
  width: 940px;
  height: 100%;
  background : #fff;
  /* border-radius: 8px; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
`