import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const useStyles = makeStyles(() => ({
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#48cfae",
  },
  logo: {
    fontSize: "25px",
    marginLeft: "20px",
    cursor: "pointer",
  },
  home: {
    marginRight: "auto",
    marginLeft: "100px",
    fontSize: "18px",
    cursor: "pointer",
  },
  cartContainer:{
    display:"flex",
    alignItems:"center",
  },
  cart: {
    fontSize: "30px",
    cursor: "pointer",
    marginRight: "30px",
  },
  cartItems:{
    position:"relative",
    right:"45px",
    top:"7px",
    border:"1px solid #48cfae",
    borderRadius:"50%",
    backgroundColor:"#0e0e10",
    width:"22px",
    color:"#48cfae",
    textAlign:"center"
  }
}));

export const Navbar = ({cartCounter}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.navBarContainer}>
      <Typography className={classes.logo}>LOGO</Typography>
      <Typography className={classes.home}>Home</Typography>
      <Grid className={classes.cartContainer}>
        <ShoppingCartIcon className={classes.cart} />
        {cartCounter !== 0 &&(
          <Typography className={classes.cartItems}>{cartCounter}</Typography>
        )}
        
      </Grid>
    </Grid>
  );
};
