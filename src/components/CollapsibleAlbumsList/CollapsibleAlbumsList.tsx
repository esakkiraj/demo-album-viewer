import React from "react";
import { Collapse, Panel } from "src/components/Collapse";
import { Album } from "src/types";
import PhotoGridContainer from "src/container/PhotoGridContainer";

type CollapsibleAlbumsListProps = {
  albums: Album[];
};

const CollapsibleAlbumsList: React.FC<CollapsibleAlbumsListProps> = ({
  albums
}) => {
  return (
    <Collapse>
      {albums.map(({ id, title }) => {
        return (
          <Panel
            header={`${id}-${title}`}
            key={id}
            renderContent={() => {
              return <PhotoGridContainer albumId={id} />;
            }}
          />
        );
      })}
    </Collapse>
  );
};

export default CollapsibleAlbumsList;
