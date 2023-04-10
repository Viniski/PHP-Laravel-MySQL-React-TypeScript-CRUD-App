import { Routes, Route } from "react-router-dom";
import { EditProduct } from "../pages/EditPage";
import { CreateProduct } from "../pages/CreatePage";
import { ProductList } from "../pages/ListPage";
import { ProductChart } from "../pages/ChartPage";
import { NotFoundPage } from "../pages/404Page";
import { ROOT, CHART, CREATE, EDIT, ALL_PATH } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<ProductList />} />
      <Route path={CREATE} element={<CreateProduct />} />
      <Route path={EDIT} element={<EditProduct />} />
      <Route path={CHART} element={<ProductChart />} />
      <Route path={ALL_PATH} element={<NotFoundPage />} />
    </Routes>
  );
};
