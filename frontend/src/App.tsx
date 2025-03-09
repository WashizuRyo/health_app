import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <StrictMode>
      <ErrorBoundary fallback={<div>something went wrong</div>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
}
