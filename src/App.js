// import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Tour from './components/Tour';
import TourList from './components/TourList';
import TourDetail from './components/TourDetail';

function Layout() {
  return (
    <div>
      <div className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tour">Tour</Link>
        </nav>
      </div>
      <Outlet />
      <div className="App-header"><small>creact by WangShuan</small></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":id" element={<TourDetail />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
