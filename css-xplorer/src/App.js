import logo from './logo.svg';
import ColorPage from './CSS-colors/ColorPage'
import DivSpan from './HtmlFormatting/DivSpan';
import './App.css';
import HtmlTable from './HtmlFormatting/HtmlTable';
import Welcome from './Welcome/Welcome';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/table" element={<HtmlTable/>}/>
        <Route path="/divspan" element={<DivSpan/>}/>
        <Route path="/colorPage" element={<ColorPage/>}/>
        <Route path="/" element={<Welcome/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
