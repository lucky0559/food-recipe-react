import { Layout } from "@/Layout";
import { AboutPage, ContactPage, HomePage, RecipesPage } from "@/pages";
import { AdminHomePage } from "@/pages/admin/AdminHomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<AdminHomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
