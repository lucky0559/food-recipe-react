import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // server
  cache: new InMemoryCache(), // apollo client uses to cache query results after fetching them
  credentials: "include" // this tells apollo client to send cookies along with every request to server
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MantineProvider>
  </StrictMode>
);
