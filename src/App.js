import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.scss';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? (<Link to="/login"> Login </Link>) :
        (
          <>
          <Link to="/createpost"> Create Post </Link>
        <a href="#" onClick={signUserOut}>Logout</a>
        </>
       )
        }
      </nav>
      <Routes>
        <Route exact path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
