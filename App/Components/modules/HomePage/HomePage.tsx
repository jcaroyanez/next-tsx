import { albumsList, getDetailAlbum } from "../../../../hooks/album";
import { FormControl, makeStyles, Theme, createStyles, InputLabel, Select, MenuItem, Grid } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { Album, AlbumDetail } from "../../../../models/album";
import LayoutCard from "./components/LayoutCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
    },
    contentSelect: {
      marginTop: 20 ,
    }
  })
);

const HomePage = () => {
  const [album, setAlbum] = useState<number | string>('');
  const albums: Album[] = albumsList();
  const albumsDetail: AlbumDetail[] = getDetailAlbum(album as number);
  const classes = useStyles();
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setAlbum(event.target.value as number);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.contentSelect}>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="select-albums">Age</InputLabel>
            <Select
              value={album}
              onChange={handleChange}
              label='Albums'
              name='album'
              id='select-albums'>
              { albums.map((album: Album, i: number) => 
                (<MenuItem value={album.id} key={i}>{album.title}</MenuItem>))}
            </Select>
        </FormControl>
      </Grid>
      <LayoutCard albumsDetailt={albumsDetail}></LayoutCard>
    </>
  );
}


export default HomePage;