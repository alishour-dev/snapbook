import React, { useState } from 'react';
import "./styles/resets.scss";
import Header from './comps/Header';
import UploadForm from './comps/UploadForm';
import ImageList from './comps/ImageList';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="app">
      <Header />
      <UploadForm />
      <ImageList setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;