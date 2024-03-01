import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReviewsCard from "../../components/reviewsCard/ReviewsCard";
import "./ArticlePage.css";
import type { RootState, AppDispatch } from "../../store/";
import { fetchPost, addPostComment } from "../../store/articleSlice";


function ArticlePage() {
  const { idArticle } = useParams();

  const [addCommentText, setAddCommentText] = useState("");

  const commentUserId = 1;
 
  const post = useSelector((state:RootState) => state.article.post);
  const user = useSelector((state: RootState) => state.article.postUser);
  const comments = useSelector((state: RootState) => state.article.comments);

  const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
     dispatch(fetchPost(idArticle || "1"));
   }, [dispatch,idArticle]); 


  const navigate = useNavigate();

  
  return (
    
      <div className="container-1248">
    
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
                {post?.tags?.map((tag) => "#" + tag).join()}
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

        <h1 className="articlePage__text-comment">
          Add <span className="highlight-text">comment</span>
        </h1>
        <textarea
          value={addCommentText}
          onChange={(e) => setAddCommentText(e.target.value)}
          className="articlePage__form-comment"
          placeholder="ENTER YOUR COMMENT"
        ></textarea>
        <button
          className="articlePage__form-button"
          onClick={() =>
            dispatch(
              addPostComment({
                body: addCommentText,
                postId: post.id,
                userId: commentUserId,
              })
            )
          }
        >
          <span className="articlePage__text-button">Send</span>
        </button>
      </div>
  );
}

export default ArticlePage;
