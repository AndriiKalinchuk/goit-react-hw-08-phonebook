import { AppBar, NavBlock, UserBlock } from './Header.styled';
import NavbarAuth from 'modules/NavbarAuth/NavbarAuth';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'modules/UserMenu/UserMenu';
import { Navigation } from 'modules/Navigation/Navigation';
import Logo from 'assets/logo-phonebook.png';

import { Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component={'header'} sx={{ position: 'relative', height: '36px' }}>
      <AppBar
        component={'nav'}
        sx={{
          background: '#94aae4',
          backdropFilter: 'blur(6.5px)',
          position: 'relative',
        }}
        elevation={6}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ my: 2, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/">
              <img src={Logo} alt="logo" width={48} />
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <NavBlock>
              <Navigation />
            </NavBlock>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <UserBlock>{isLoggedIn ? <UserMenu /> : <NavbarAuth />}</UserBlock>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
