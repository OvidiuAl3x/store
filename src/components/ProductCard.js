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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const useStyles = makeStyles(() => ({
  recipeCardContainer: {
    margin: "30px auto!important",
    width: "370px",
    minHeight: "290px",
    borderRadius: "12px!important",
    boxShadow: "0px 3px 10px 5px rgba(0,0,0, 0.5)!important",
    background:
      "linear-gradient(130deg, rgba(2,0,36,1) 10%, rgba(75,73,220,1) 80%, rgba(75,73,220,1) 100%)",
  },

  rating: {
    top: "50px",
    left: "10px",
    color: "white !important",
    backgroundColor: "#4b49dc !important",
    cursor: "auto!important",
    "&:hover": {
      backgroundColor: "#4b49dc!important",
    },
  },

  productName: {
    fontWeight: "bold!important",
    fontSize: "18px !important",
    textTransform: "uppercase",
    color: "white",
  },

  buttonContainer: {
    display: "flex!important",
    justifyContent: "space-between!important",
    margin: "auto!important",
  },

  price: {
    margin: "20px 15px!important",
    color: "white",
    paddingTop: "5px",
  },

  buttonCart: {
    margin: "20px 15px!important",
    color: "white!important",
    background:
      "linear-gradient(130deg, rgba(75,73,220,1) 1%, rgba(2,0,36,1) 53%, rgba(75,73,220,1) 100%)",
    "&:hover": {
      background:
        "linear-gradient(130deg, rgba(75,73,220,1) 1%, rgba(2,0,36,1) 53%, rgba(75,73,220,1) 100%)",
    },
  },
}));

export const ProductCard = ({ product, addToCart }) => {
  const classes = useStyles();
  const { title, price, rating, thumbnail, id } = product;

  return (
    <Grid key={id} container item xs={12} sm={6} md={4}>
      <Card
        style={{ margin: "20px 20px" }}
        className={classes.recipeCardContainer}
      >
        <Grid>
          <Grid
            style={{ marginTop: "-40px"}}
          >
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
          </CardContent>
        </Grid>
        <Grid className={classes.buttonContainer}>
          <Typography className={classes.price}>
            <strong>Price:</strong> $ {price}
          </Typography>
          <Button
            className={classes.buttonCart}
            onClick={() => addToCart(product)}
          >
            <AddShoppingCartIcon />
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};
