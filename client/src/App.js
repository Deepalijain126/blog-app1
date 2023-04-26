
import './App.css';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
  <Navbar></Navbar>
    <div className="max-w-screen-md mx-auto pt-20">
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/About" element={ <About/> } />
    <Route path="/article-list" element={ <ArticlesList/> } />
    <Route path="/article/:name" element={ <Article></Article> } />
      
</Routes>
    </div>
    </div>);
}

export default App;
