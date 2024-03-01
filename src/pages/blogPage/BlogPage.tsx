import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../components/blogCard/BlogCard";
import "./BlogPage.css";
import type { Post} from "../../types";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

type BlogPost = {
  title: string;
  id: number;
  body: string;
  user: User;
  tags: string[];
  reactions: number;
};


const countCardBlogOnPage = 12;

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
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
        const users = [] as User[]
        Promise.all(
          data.posts.map((post: Post) =>
            fetch(
              `https://dummyjson.com/users/${post.userId}?select=id,firstName,lastName,image`
            )
              .then((response) => response.json())
              .then((user: User) => users.push(user))
          )
        ).then(() => {
          const blogPosts = data.posts.map((post: Post) => ({
            title: post.title,
            id: post.id,
            body: post.body,
            user: users.find((user) => user.id === post.userId),
            tags: post.tags,
            reactions: post.reactions,
          }));
          setPosts(blogPosts);
          setTotalPosts(data.total);
        });
        
      });
  }, [pageNum]);

  return (    
      <div className="container-1248">
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
              user={{
                image: post.user?.image,
                lastName: post.user?.lastName,
                firstName: post.user?.firstName,
              }}
              onClick={(e) => navigate("/blog/" + post.id)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", paddingTop: "90px" }}>
          <img
            onClick={(e) =>
              pageNum !== 0 && setPageNum((pageNum) => pageNum - 1)
            }
            src="images/Blog Page/Next.svg"
            alt=""
            style={{
              marginRight: "30px",
              transform: "rotate(180deg)",
              opacity: pageNum === 0 ? "0.5" : "1",
            }}
          />
          <img
            onClick={(e) =>
              (pageNum + 1) * 12 < totalPosts &&
              setPageNum((pageNum) => pageNum + 1)
            }
            src="images/Blog Page/Next.svg"
            alt=""
            style={{
              marginLeft: "30px",
              opacity: (pageNum + 1) * 12 > totalPosts ? "0.5" : "1",
            }}
          />
        </div>
      </div>   
  );
}

export default BlogPage;
