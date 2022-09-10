import { Route, Routes } from "react-router-dom";
import HomPage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SingleMoviePage from "./page/SingleMoviePage";

function App() {
  return (
    <Routes>
      <Route path="/movie/:id/:name" element={<SingleMoviePage />} />
      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/" element={<HomPage />} />
    </Routes>
  );
}

export default App;
