import 'macro-css';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Authors from './pages/Authors';
import MostCommentPost from './pages/MostCommentPost';
import MostLikePost from './pages/MostLikePost';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App clear">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Authors/>}></Route>
          <Route path="/mostcommentpost" element={<MostCommentPost/>}></Route>
          <Route path=" /mostlikepost" element={<MostLikePost/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
