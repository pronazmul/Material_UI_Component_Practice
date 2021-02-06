import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Share, SupervisedUserCircleTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  CardMediaStyle: {
    height: 0,
    paddingTop: "55%"
  }
}));

const TestCard = () => {
  const classes = useStyles();

  return (
    <Box m={10}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={20}>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar>
                    <SupervisedUserCircleTwoTone />
                  </Avatar>
                }
                action={
                  <IconButton>
                    <Share />
                  </IconButton>
                }
                title="Pro Nazmul"
                subheader="20-20-21"
              />

              <CardMedia
                className={classes.CardMediaStyle}
                image="https://i.ibb.co/KwKw7jW/plant.jpg"
                title="Refuse Children"
              />

              <CardContent>
                <Typography variant="body2">
                  if you miss the train i am on you will know i am gone
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Share </Button>
              <Button>Learn More </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  <SupervisedUserCircleTwoTone />
                </Avatar>
              }
              action={
                <IconButton>
                  <Share />
                </IconButton>
              }
              title="Pro Nazmul"
              subheader="20-20-21"
            />

            <CardMedia
              className={classes.CardMediaStyle}
              image="https://i.ibb.co/KwKw7jW/plant.jpg"
              title="Refuse Children"
            />

            <CardContent>
              <Typography variant="body2">
                if you miss the train i am on you will know i am gone
              </Typography>
            </CardContent>

            <CardActions>
              <Button>Share </Button>
              <Button>Learn More </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestCard;
