import HomePage from "./pages/HomePage"; // make sure the path is correct
import "./index.css"; // if you have any global CSS
import Hero from "./components/Hero"; // if you want to use Hero directly in App
import "./components/Hero.css"; // if Hero has its own CSS
import { BrowserRouter  } from "react-router-dom"; // if you plan to use routing
function App() {
  return ( <>
<div className="App">
  
  <Hero />
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
</div>
    </>
  );
}

export default App;