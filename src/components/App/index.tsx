import './App.css'
import Header from "../Header";
import { Container } from '@mui/system';
import AppRoute from '../Route/AppRoute';

const App = () => {


  return (
    <>
      <Header />
      <Container sx={{ mt: "1rem" }}>
        <AppRoute />
      </Container>
    </>
  )
}

export default App
