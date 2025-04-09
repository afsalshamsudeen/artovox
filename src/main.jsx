
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import styled from 'styled-components'


const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.main`
  flex: 1;
`;
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppWrapper>
  
  <App/>
  <MainContent/>
  
  </AppWrapper>
  </BrowserRouter>,
)
