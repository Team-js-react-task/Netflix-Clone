
import { Routes, Route } from "react-router-dom";
import FavList from "./components/favList/FavList"
import Home from "./components/home/Home"
import NavBar from "./components/navbar/NavBar"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
