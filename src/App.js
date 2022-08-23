import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import MemoSet from './pages/MemoSet';
import Register from './pages/Register';
import Search from './pages/Search';

function App() {
  const isLoged = true;
  return (
    <Routes>
      <Route exact path='/' element={ isLoged ? <Main /> : <Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/search' element={<Search />} />
      <Route exact path='/memoset' element={<MemoSet />} />
    </Routes>
  );
}

export default App;
