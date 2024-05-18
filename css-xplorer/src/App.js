import logo from './logo.svg';
import ColorPage from './CSS-colors/ColorPage'
import DivSpan from './HtmlFormatting/DivSpan';
import './App.css';
import HtmlTable from './HtmlFormatting/HtmlTable';
import Welcome from './Welcome/Welcome';
import DisplayXplore from './Display/DisplayXplore';
import CustomPage from './CustomPage/CustomPage';
import Design1 from './CSS_Battle/Design1';
import CSSBattleField from './CustomPage/CSSBattleField';
import Battle1 from './CustomPage/Battle1';
import MarginPadding from './MarginPadding/MarginPadding';
import BoxModel from './HtmlFormatting/BoxModel';
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
        <Route path="/boxModel" element={<BoxModel/>}/>
        <Route exact path="/cssBattleField/1" element={<Battle1/>}/>
        <Route path="/cssBattleField" element={<CSSBattleField/>}/>
        
        <Route path="/" element={<Welcome/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
