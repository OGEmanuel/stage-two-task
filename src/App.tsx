import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailsPage from './pages/Details';

const router = createBrowserRouter([
  {
    path: '',
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'details',
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
