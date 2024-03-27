import { createBrowserRouter, RouterProvider } from "react-router-dom";
import tw from "tailwind-styled-components";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import MainPage from "./pages/Main/MainPage";
import GuestMyPage from "./pages/Guest/GuestMyPage";
import ListPage from "./pages/List/ListPage";
import DetailPage from "./pages/Detail/DetailPage";
import Home from "./pages/Main/Home";

const LayoutContainer = tw.div`
  w-screen
  h-auto
  md:w-auto 
  bg-primary
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "list", element: <ListPage /> },
      { path: "detail", element: <DetailPage /> },
      { path: "guestMyPage", element: <GuestMyPage /> },
      { path: "home", element: <Home /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
]);

function App() {
  return (
    <>
      <LayoutContainer>
        <RouterProvider router={router} />
      </LayoutContainer>
    </>
  );
}

export default App;
