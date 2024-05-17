import logo from './logo.svg';
import ColorPage from './CSS-colors/ColorPage'
import DivSpan from './HtmlFormatting/DivSpan';
import './App.css';
import HtmlTable from './HtmlFormatting/HtmlTable';
import Welcome from './Welcome/Welcome';
import DisplayXplore from './Display/DisplayXplore';
import CustomPage from './CustomPage/CustomPage';
import MarginPadding from './MarginPadding/MarginPadding';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/table" element={<HtmlTable/>}/>
        <Route path="/divspan" element={<DivSpan/>}/>
        <Route path="/colorPage" element={<ColorPage/>}/>
        <Route path="/display" element={<DisplayXplore/>}/>
        <Route path="/marginpad" element={<MarginPadding/>}/>
        <Route path="/customPage" element={<CustomPage/>}/>
        <Route path="/" element={<Welcome/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
