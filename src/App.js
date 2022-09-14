import { Route, Routes } from "react-router-dom";
import DetailMovie from "./components/DetailMovie";
import AddNewMovie from "./page/AddNewMovie";
import AdminPage from "./page/AdminPage";
import HomPage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SingleMoviePage from "./page/SingleMoviePage";

function App() {
  return (
    <Routes>
      <Route path="/movie/:id/:name" element={<SingleMoviePage />} />
      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/admin/detailMovie/:id" element={<DetailMovie />} />
      <Route path="/admin/add/newmoviedata" element={<AddNewMovie />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<HomPage />} />
    </Routes>
  );
}

export default App;
