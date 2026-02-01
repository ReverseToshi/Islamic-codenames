import React from 'react';
import './App.css';
import { GameCanvas } from './game/GameCanvas';
import Start from './UI/Start_page';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/game" element={<GameCanvas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
