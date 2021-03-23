import { makeStyles, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { AlbumDetail } from "../../../../../models/album";

interface albumProps {
  album: AlbumDetail
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const AlbumCard = ({album}: albumProps) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="album img"
          height="140"
          image={album.url}
          title="album img"/>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {album.title}
            </Typography>
          </CardContent>
      </Card>
    </>
  )
};

export default AlbumCard;