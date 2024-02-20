import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import ReviewsCard from "../../components/reviewsCard/ReviewsCard";
import Footer from "../../components/footer/Footer";
import "./ArticlePage.css";
import type { Post, User, Comment, CommentResponse } from "../../types";


function ArticlePage() {
  const { idArticle } = useParams();
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://dummyjson.com/posts/${idArticle}?select=title,id,body,userId,tags,reactions`
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data);

        fetch(
          `https://dummyjson.com/users/${data.userId}?select=firstName,lastName,image`
        )
          .then((response) => response.json())
          .then((data) => {
            setUser(data);
          });
      });

    fetch(`https://dummyjson.com/comments/post/${idArticle}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(
          data.comments.map((comment: CommentResponse) => {
            return {
              id: comment.id,
              body: comment.body,
              postId: comment.postId,
              username: comment.user.username,
            };
          })
        );
      });
  }, []);

  return (
    <div className="main-background-color">
      <div className="container-1248">
        <Menu />
        <div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "126px",
          }}
        >
          <h1 className="articlePage__header">{post?.title}</h1>
          <div style={{ display: "flex" }}>
            <img
              src={user?.image}
              alt=""
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                paddingRight: "22px",
              }}
            />
            <div>
              <div className="articlePage__writtenby">Written By</div>
              <div className="articlePage__name">
                {user?.firstName + " " + user?.lastName}
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <span className="articlePage__reaction">{post?.reactions}</span>
                <img
                  src="/images/Our Top Restaurants/Star.svg"
                  alt=""
                  style={{ position: "relative", top: "5px" }}
                />
              </div>
              <div className="articlePage__tags">
                {post?.tags.map((tag) => "#" + tag).join()}
              </div>
            </div>
          </div>
          <p className="articlePage__text">{post?.body}</p>
          <button
            className="articlePage__button"
            onClick={(e) => navigate("/blog")}
          >
            <img
              src="/images/Article Page/Arrow.svg"
              alt=""
              style={{ verticalAlign: "middle" }}
            />
            <span
              className="articlePage__button__text"
              style={{ verticalAlign: "middle" }}
            >
              All Articles
            </span>
          </button>
          <h3 className="articlePage__header-comment">Comments</h3>
          {comments?.map((comment) => (
            <ReviewsCard name={comment.username} text={comment.body} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ArticlePage;
