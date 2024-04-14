import { FC } from "react";
import { useRouteError } from "react-router-dom";

// Define an interface for the potential error object
interface RoutingError {
  error:{
    statusText: string;
    message: string;}
}

export default function ErrorsPage() {
  const error= useRouteError(); // Type the error as RoutingError or undefined

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error?.statusText || error?.message}</i> */}
      </p>
    </div>
  );
}
