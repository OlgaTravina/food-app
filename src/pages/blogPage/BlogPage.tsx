import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../components/blogCard/BlogCard";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import "./BlogPage.css";
import type { Post} from "../../types";



const countCardBlogOnPage = 12;

function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts?limit=12&skip=" +
        pageNum * countCardBlogOnPage
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setTotalPosts(data.total);
      });
  }, [pageNum]);

  return (
    <div className="main-background-color">
      <div className="container-1248">
        <Menu />
        <h1 className="blogPage__header">
          Latest <span className="highlight-text">Article</span>
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "63px",
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              body={post.body}
              tags={post.tags}
              reactions={post.reactions}
              onClick={(e) => navigate("/blog/" + post.id)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", paddingTop: "90px" }}>
          <img
            onClick={(e) =>pageNum !== 0 && setPageNum((pageNum) => pageNum - 1)}
            src="images/Blog Page/Next.svg"
            alt=""
            style={{
              marginRight: "30px",
              transform: "rotate(180deg)",
              opacity: pageNum === 0 ? "0.5" : "1",
            }}
          />
          <img
            onClick={(e) =>(pageNum + 1) * 12 < totalPosts && setPageNum((pageNum) => pageNum + 1)}
            src="images/Blog Page/Next.svg"
            alt=""
            style={{
              marginLeft: "30px",
              opacity: (pageNum + 1) * 12 > totalPosts ? "0.5" : "1",
            }}
          />
        </div>

       
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
