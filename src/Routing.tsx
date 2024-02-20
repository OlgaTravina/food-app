import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import BlogPage from "./pages/blogPage/BlogPage";
import ArticlePage from "./pages/articlePage/ArticlePage";


export const Routing = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:idArticle" element={<ArticlePage />} />
      </Routes>
    );
}

