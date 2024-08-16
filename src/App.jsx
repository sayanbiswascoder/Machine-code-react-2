import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import RandomUser from "./components/randomUser";
import RamdomJokes from "./components/ramdomJokes";
import CatsListing from "./components/CatsListing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/random-user" />
    },
    {
      path: "/random-user",
      element: <RandomUser />
    },
    {
      path: "/random-jokes",
      element: <RamdomJokes />
    },
    {
      path: "/cats-listing",
      element: <CatsListing />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
