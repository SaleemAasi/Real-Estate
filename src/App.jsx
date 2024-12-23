import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';

import Profile from './Pages/Profile';
import About from './Pages/About.Jsx';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
