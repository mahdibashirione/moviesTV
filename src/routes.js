import NotFoundPage from "./page/NotFoundPage";
import HomPage from "./page/HomePage";
import SingleMoviePage from "./page/SingleMoviePage";

const routes = [
  { path: "/", element: <HomPage /> },
  { path: "/movie/:id/:name", element: <SingleMoviePage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
