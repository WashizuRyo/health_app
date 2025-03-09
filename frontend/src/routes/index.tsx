import ErrorPage from "../pages/error-page";
import Test from "../pages/test";

export const routes = [
  {
    path: "/",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
];
