import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';
import { About } from './pages/About.tsx';
import { Welcome } from './pages/Welcome.tsx';

const rootNode = document.getElementById('root')!;

const root = createRoot(rootNode);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'welcome',
        element: <Welcome />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
