import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from "./pages/Form";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Social from './pages/social/Social';
import News from './pages/news/New';
import Counter from './pages/counter/Counter';
import Table from './pages/table/Table';
import Calculator from './pages/calculator/Calculator';
import Watch from './pages/stopwatch/Watch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/blanco" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/social-links" element={<Social />} />
        <Route path="/news" element={<News />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/table' element={<Table />} />
        <Route path='/calc' element={<Calculator />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
