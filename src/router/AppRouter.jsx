import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import Navbar from '../components/nav/Navbar';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import Detail from '../pages/detail/Detail';
import Register from '../pages/register/Register';
const AppRouter = ({user,setUser}) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="register" element={<Register />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
