import React from 'react';
import './App.css';
import ImageUploader from './components/imageUploader/imageUploader';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ImageUploader></ImageUploader>
    </div>
  );
}

export default App;
