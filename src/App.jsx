// src/App.js
import React from "react";
import { GameProvider } from "./context/GameContext";
import AppRouter from "./routers/AppRouter";
import SplashScreen from './components/SplashScreen';

import "./App.css";

function App() {
  return (
    <GameProvider>
      <SplashScreen />

      <AppRouter />
    </GameProvider>
  );
}

export default App;
