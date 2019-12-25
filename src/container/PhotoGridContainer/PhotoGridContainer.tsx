import React, { useEffect, useState } from "react";
import PhotoGrid from "src/components/PhotoGrid";
import { Photo } from "src/types";

type PhotoGridContainerProps = {
  albumId: string;
};

const getPhotoResourceUrl = (albumId: string) => {
  return `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
};

const PhotoGridContainer: React.FC<PhotoGridContainerProps> = ({ albumId }) => {
  const [{ isFetchingPhoto, photos }, setFetchedPhotoData] = useState<{
    isFetchingPhoto: boolean;
    photos: Photo[];
  }>({
    isFetchingPhoto: true,
    photos: []
  });

  useEffect(() => {
    const photoResourceUrl = getPhotoResourceUrl(albumId);
    fetch(photoResourceUrl)
      .then(res => res.json())
      .then((result: Photo[]) => {
        setFetchedPhotoData({
          isFetchingPhoto: false,
          photos: (result || []).slice(0, 12)
        });
      });
  }, [albumId]);

  if (isFetchingPhoto) {
    return <div>Fetching Photoss.....</div>;
  }

  return <PhotoGrid photos={photos} />;
};

export default PhotoGridContainer;
