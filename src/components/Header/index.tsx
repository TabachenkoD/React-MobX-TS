import { ShoppingBasket } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();
  const navigate = useNavigate();

  const onLogout = () => {
    loginStore.logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ color: "#fafafa", textDecoration: "none" }}>
            E-commers store
          </NavLink>
        </Typography>

        <NavLink to="/login" style={{ color: "#fafafa" }}>
          {!loginStore.getUserToken ? (
            <Button variant="outlined" color="inherit" sx={{ mr: "1rem" }}>
              Login
              <LoginIcon sx={{ ml: "0.5rem" }} />
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              sx={{ mr: "1rem" }}
              onClick={() => onLogout()}
            >
              Logout
              <LogoutIcon sx={{ ml: "0.5rem" }} />
            </Button>
          )}
        </NavLink>

        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
