import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { Notifications } from "@mantine/notifications";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // server
  cache: new InMemoryCache(), // apollo client uses to cache query results after fetching them
  credentials: "include", // this tells apollo client to send cookies along with every request to server
  link: createUploadLink({ uri: "http://localhost:4000/graphql" }),
  defaultContext: {
    headers: {
      "Apollo-Require-Preflight": "true"
    }
  }
});

/* sm	40rem (640px)	@media (width >= 40rem) { ... } mobile
md	48rem (768px)	@media (width >= 48rem) { ... } tablet
lg	64rem (1024px)	@media (width >= 64rem) { ... } laptop
xl	80rem (1280px)	@media (width >= 80rem) { ... } desktop
2xl	96rem (1536px)	@media (width >= 96rem) { ... } extra large screen tv  */

const theme = createTheme({
  breakpoints: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    xxl: "96rem"
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Notifications />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MantineProvider>
  </StrictMode>
);
