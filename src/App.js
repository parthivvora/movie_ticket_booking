import "./styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import apiRoutes from "./constant/apiRoutes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/movies/Movies";
import MovieDetails from "./pages/movies/MovieDetails";
import Events from "./pages/events/Events";
import EventsDetails from "./pages/events/EventsDetails";
import Blog from "./pages/blogs/Blog";
import BlogDetails from "./pages/blogs/BlogDetails";
import AppDownload from "./pages/AppDownload";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateRoute />}> */}
            <Route path={apiRoutes.HOME} element={<Home />} />
          {/* </Route> */}
          <Route path={apiRoutes.REGISTER} element={<Register />} />
          <Route path={apiRoutes.LOGIN} element={<Login />} />
          <Route path={apiRoutes.ABOUT} element={<About />} />
          <Route path={apiRoutes.CONTACT} element={<Contact />} />
          <Route path={`${apiRoutes.APPDOWNLOAD}`} element={<AppDownload />} />

          {/* Movie */}
          <Route path={apiRoutes.MOVIE} element={<Movies />} />
          <Route
            path={`${apiRoutes.MOVIE}/:movieId`}
            element={<MovieDetails />}
          />

          {/* Event */}
          <Route path={apiRoutes.EVENT} element={<Events />} />
          <Route
            path={`${apiRoutes.EVENT}/:eventId`}
            element={<EventsDetails />}
          />

          {/* Blog */}
          <Route path={apiRoutes.BLOG} element={<Blog />} />
          <Route path={`${apiRoutes.BLOG}/:blogId`} element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {apiRoutes.HOME}
