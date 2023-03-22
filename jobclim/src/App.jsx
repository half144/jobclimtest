import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { AppContainer, Container, LineDecoration } from "./globalStyle"

function App() {
  return (
    <>
      <LineDecoration />
      <AppContainer>
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </AppContainer>
    </>

  )
}

export default App
