import Home from "./pages/home";
import Login from "./pages/login";
import { Container } from "./styles";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container><Home/></Container>}></Route>
        <Route path="/login" element={<Container><Login/></Container>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;