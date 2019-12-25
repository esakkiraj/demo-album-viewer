import React from "react";
import "./App.css";

import PhotoAlbumViewer from "./components/PhotoAlbumViewer";

const App: React.FC = () => {
  return (
    <div className="App">
      <PhotoAlbumViewer />
    </div>
  );
};

export default App;
