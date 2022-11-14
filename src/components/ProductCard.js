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
    boxShadow: "0px 3px 10px 5px rgba(72, 207, 174, 0.5)!important",
    background: "#0e0e10 !important",
  },

  rating: {
    top: "50px",
    left: "10px",
    color: "#48cfae !important",
    backgroundColor: "#0e0e10 !important",
    cursor: "auto!important",
    "&:hover": {
      backgroundColor: "#0e0e10!important",
    },
  },

  productName: {
    fontWeight: "bold!important",
    fontSize: "18px !important",
    textTransform: "uppercase",
    color: "#48cfae",
  },

  buttonContainer: {
    display: "flex!important",
    justifyContent: "space-between!important",
    margin: "auto!important",
  },

  price: {
    margin: "20px 15px!important",
    color: "#48cfae",
    paddingTop: "5px",
  },

  buttonCart: {
    margin: "20px 15px!important",
    color: "#48cfae!important",
    "&:hover": {
      backgroundColor: "#0e0e10!important",
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
            style={{ marginTop: "-40px", borderBottom: "1px solid #48cfae" }}
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
