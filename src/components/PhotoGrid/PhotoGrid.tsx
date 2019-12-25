import React from "react";
import { Photo } from "src/types";

type PhotoGridProps = {
  photos: Photo[];
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        alignContent: "space-around",
        justifyContent: "space-around"
      }}
    >
      {photos.map(({ thumbnailUrl }) => {
        return (
          <div style={{ padding: "10px 0" }}>
            <img src={thumbnailUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
