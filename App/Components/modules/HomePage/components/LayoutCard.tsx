import { AlbumDetail } from "../../../../../models/album";
import AlbumCard from "./AlbumCard";
import styles from './LayoutCard.module.scss';
interface LayoutCardProps {
  albumsDetailt: AlbumDetail[];
}

const LayoutCard = ({albumsDetailt}: LayoutCardProps) => {
  return (
    <div className={styles.content}>
      {albumsDetailt.map((value: AlbumDetail, i: number) => 
        (<AlbumCard album={value} key={i}></AlbumCard>))}
    </div>
  );
}

export default LayoutCard;