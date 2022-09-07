import { Route, Routes } from "react-router-dom";
import HomPage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SingleMoviePage from "./page/SingleMoviePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/movie" element={<SingleMoviePage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/" element={<HomPage />} />
      </Routes>
    </div>
  );
}

export default App;
