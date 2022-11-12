import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarRateIcon from "@mui/icons-material/StarRate";

export const useStyles = makeStyles(() => ({
  recipeCardContainer: {
    margin: "30px auto",
    width: "370px",
    minHeight: "290px",
    borderRadius: "12px",
    boxShadow: "0px 3px 10px 5px rgba(72, 207, 174, 0.5)",
  },

  rating: {
    top: "50px",
    left: "10px",
    color: "#48cfae",
    backgroundColor: "#0e0e10",
    cursor: "auto",
    "&:hover": {
      backgroundColor: "#0e0e10",
    },
  },

  productName: {
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "uppercase",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0e0e10",
    margin: "20px 15px",
    color: "#48cfae",
    "&:hover": {
      backgroundColor: "#48cfae",
      color: "#0e0e10",
    },
  },
}));

export const ProductCard = ({ product }) => {
  const classes = useStyles();

  const { title, description, price, rating, thumbnail, id } = product;

  return (
    <Grid key={id} container item xs={12} sm={6} md={4}>
      <Card
        style={{ margin: "20px 20px" }}
        className={classes.recipeCardContainer}
      >
        <Grid>
          <Grid style={{ marginTop: "-40px" }}>
            <Button className={classes.rating}>
              <StarRateIcon style={{ fontSize: "18px", paddingRight: "2px" }} />
              {rating}
            </Button>

            <CardMedia
              component="img"
              height="200"
              image={thumbnail}
              alt="green iguana"
            />
          </Grid>

          <CardContent>
            <Typography gutterBottom className={classes.productName}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Price:</strong> $ {price}
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={classes.buttonContainer}>
          <Button className={classes.button}>View Product</Button>
          <Button className={classes.button}>Add to Cart</Button>
        </Grid>
      </Card>
    </Grid>
  );
};
