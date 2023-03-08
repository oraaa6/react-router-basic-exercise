import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./pages/ProductDetail";

// const createDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductPage />} />
//   </Route>
// ); // defiinowanie ścieżek z JSX
// const router = createBrowserRouter(createDefinitions);

//   /cos - scieżka absolutna, cos - sciezka relatywna
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index: true znaczy, że to jest defaultowa ścieżka, i HomePage powinno się wyświetlić pod /, alternatywnie tu można dać: path: '' i będzie to samo znaczylo
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> }, // dynamiczna ścieżka, bardzo wazny jest tu dwukropek. w to "productId" mozemy wstawić dowolną ścieżkę
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
