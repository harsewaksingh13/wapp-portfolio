import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import styles from "tailwind.css";
import { ErrorNotFound } from "./components";
import { PageContent } from "./pages";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const themeMode = "dark"

export function ErrorBoundary() {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status == 404

  console.error(error);

  return (
    <html className={themeMode}>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <PageContent title="Error">
          <div>
            {
              (is404) ? (<ErrorNotFound />) :
                (error instanceof Error) ? (
                  <div>
                    <h1>Error</h1>
                    <p>{error.message}</p>
                    <p>The stack trace is:</p>
                    <pre>{error.stack}</pre>
                  </div>
                ) : (<h1>Unknown Error</h1>)
            }
          </div>
        </PageContent>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  // const theme = useTheme()

  return (
    <html lang="en" className={themeMode}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
