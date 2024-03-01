import "./BlogCard.css";
import type { User } from "../../types";

type BlogCardProps = {
  title: string;
  body: string;
  tags: string[];
  user: User;
  reactions: number;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

function BlogCard({ title, body, tags, reactions, onClick, user }: BlogCardProps) {
  return (
    <div
      className="blogCard__card"
      data-testid="root-blog-card"
      onClick={onClick}
    >
      <h1 className="blogCard__header">{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
          <div className="blogCard__writtenby">Written By</div>
          <div className="blogCard__name">
            {user?.firstName + " " + user?.lastName}
          </div>
        </div>

        <span className="blogCard__reaction">{reactions}</span>
        <img src="/images/Our Top Restaurants/Star.svg" alt="" />
      </div>
      <span className="blogCard__tags">
        {tags.map((tag) => "#" + tag).join()}
      </span>
      <p className="blogCard__text">{body}</p>
    </div>
  );
}
export default BlogCard;
