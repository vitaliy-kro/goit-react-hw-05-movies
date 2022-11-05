import { Suspense } from 'react';
import { Header, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box';

const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default SharedLayout;
