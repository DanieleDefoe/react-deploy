import { Link, Outlet, useSearchParams } from 'react-router-dom';

export const App = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  return (
    <div>
      <h1>id = {id}</h1>

      <div style={{ display: 'flex', gap: 10 }}>
        <Link to="about">About</Link>
        <Link to="welcome">Welcome</Link>
      </div>

      <Outlet />
    </div>
  );
};
