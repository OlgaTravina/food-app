import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import BlogPage from "./pages/blogPage/BlogPage";
import ArticlePage from "./pages/articlePage/ArticlePage";
import DefaultLayout from "./layouts/DefaultLayout";

export const Routing = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <MainPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <DefaultLayout>
              <BlogPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/blog/:idArticle"
          element={
            <DefaultLayout>
              <ArticlePage />
            </DefaultLayout>
          }
        />
      </Routes>
    );
}

