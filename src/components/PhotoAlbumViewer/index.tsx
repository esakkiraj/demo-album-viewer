import React, { useState, useEffect } from "react";
import CollapsibleAlbumList from "src/components/CollapsibleAlbumsList";
import { Album } from "src/types";

const PhotoAlbumViewer: React.FC = () => {
  const [{ isFetchingAlbums, albumData }, setAlbumData] = useState<{
    isFetchingAlbums: boolean;
    albumData: Album[];
  }>({
    isFetchingAlbums: true,
    albumData: []
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        return res.json();
      })
      .then((result: Album[]) => {
        setAlbumData({
          isFetchingAlbums: false,
          albumData: result
        });
      });
  }, []);

  if (isFetchingAlbums) {
    return <span>Loading....</span>;
  }

  return <CollapsibleAlbumList albums={albumData} />;
};

export default PhotoAlbumViewer;
