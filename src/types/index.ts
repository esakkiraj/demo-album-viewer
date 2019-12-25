export type Album = {
  userId: string;
  id: string;
  title: string;
};

export type Photo = {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
