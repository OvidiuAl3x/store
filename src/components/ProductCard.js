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
    margin: "30px auto",
    width: "370px",
    minHeight: "290px",
    borderRadius: "12px",
    boxShadow: "0px 3px 10px 5px rgba(72, 207, 174, 0.5)",
    background: "#0e0e10",
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
    color: "#48cfae",
  },

  description: {
    minHeight: "70px",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
  },

  price: {
    margin: "20px 15px",
    color: "#48cfae",
    paddingTop: "5px",
  },

  buttonCart: {
    backgroundColor: "#0e0e10",
    margin: "20px 15px",
    color: "#48cfae",
    "&:hover": {
      backgroundColor: "#0e0e10",
    },
  },
}));

export const ProductCard = ({ product, cartCounter, setCartCounter }) => {
  const classes = useStyles();
  const { title, price, rating, thumbnail, id } = product;

  const cartCounterFunction = () => {
    setCartCounter(cartCounter + 1);
    console.log(cartCounter);
  };

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
          <Button className={classes.buttonCart} onClick={cartCounterFunction}>
            <AddShoppingCartIcon />
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};
