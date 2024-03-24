import { createBrowserRouter, RouterProvider } from "react-router-dom";
import tw from 'tailwind-styled-components';
import HeaderLayout from './pages/HeaderLayout';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import MainPage from './pages/Main/MainPage';
import GuestMyPage from './pages/Guest/GuestMyPage';
import ListPage from './pages/List/ListPage';
import DetailPage from './pages/Detail/DetailPage';

const Container = tw.div`
  w-screen
  h-screen
  md:w-auto 
  bg-primary
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <MainPage /> },

      { path: "list", element: <ListPage /> },
      { path: "detail", element: <DetailPage /> },
      { path: "guestMyPage", element: <GuestMyPage /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
]);


function App() {
  return (
    <>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;