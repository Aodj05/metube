import { useState } from 'react';
import { BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bgMain};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path='video'>
                <Route path=':id' element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
