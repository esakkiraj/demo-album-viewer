import React from "react";
import { Collapse, Panel } from "src/components/Collapse";
import { Album } from "src/types";
import styles from "./styles.module.css";

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
          >{`Photos of Album with id: ${id} Goes here`}</Panel>
        );
      })}
    </Collapse>
  );
};

export default CollapsibleAlbumsList;
