import React, { useState } from "react";
import { Photo } from "src/types";
import closeIcon from "./close.png";
import styles from "./styles.module.css";

type PhotoGridProps = {
  photos: Photo[];
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [closedPhotos, setClosedPhoto] = useState<number[]>([]);
  return (
    <div className={styles.photoGridContainer}>
      {photos.map(({ title, thumbnailUrl, id }) => {
        return (
          closedPhotos.indexOf(id) === -1 && (
            <div key={id}>
              <span className={styles.photoThumbnail}>
                <img src={thumbnailUrl} alt={"Thumbnail view"} />
                <img
                  alt={"Remove  Button"}
                  className={styles.photoCloseIcon}
                  src={closeIcon}
                  onClick={() => {
                    setClosedPhoto(existingClosedPhotos => [
                      ...existingClosedPhotos,
                      id
                    ]);
                  }}
                />
                <span className={styles.photoTitleText}>{title}</span>
              </span>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PhotoGrid;
