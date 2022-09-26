import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./page/NotFoundPage";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map(route => <Route {...route} />)}
    </Routes>
  );
}

export default App;
