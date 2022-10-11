import styled from 'styled-components'

import MainPage from './components/MainPage';
import {Route, Routes} from 'react-router-dom';
import dataPageIndex from './assets/api/dataPageIndex';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      {dataPageIndex.map((value,index) =>  (
        <Route key={index} path={value.path} element={value.component()}/>
      ))}
    </Routes>
    // <MainPage/>
  )
}

export default App;