import { Toaster } from "react-hot-toast"; 
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<h1>Sayfa Bulunamadı</h1>} />
        </Route>
      </Routes>
      
     
      <Toaster position="top-right" />
    </>
  );
}

export default App;