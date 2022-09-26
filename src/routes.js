import NotFoundPage from "./page/NotFoundPage"
import DetailMovie from "./components/DetailMovie";
import AddNewMovie from "./page/AddNewMovie";
import AdminPage from "./page/AdminPage";
import HomPage from "./page/HomePage";
import SingleMoviePage from "./page/SingleMoviePage";

const routes = [
  { path: "/", element: <HomPage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "/admin/add/newmoviedata", element: <AddNewMovie /> },
  { path: "/admin/detailMovie/:id", element: <DetailMovie /> },
  { path: "/movie/:id/:name", element: <SingleMoviePage /> },
  { path: "*", element: <NotFoundPage /> },
]

export default routes;