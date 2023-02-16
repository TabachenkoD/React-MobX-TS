import { ShoppingBasket } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    <NavLink to='/' style={{ color: '#fafafa', textDecoration: 'none' }}>
                        E-commers store
                    </NavLink>
                </Typography>

                <NavLink to='/login' style={{ color: '#fafafa' }}>
                    <Button variant="outlined" color="inherit" sx={{ mr: '1rem' }}>
                        Login
                        <LoginIcon sx={{ ml: '0.5rem' }} />
                    </Button>
                </NavLink>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;