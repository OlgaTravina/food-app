import "./BlogCard.css";

type BlogCardProps = {
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const innerStyle = {
  width: "33%",
  height: "233px",
  marginBottom: "44px",
  marginTop: "44px",
};

function BlogCard({ title, body, tags, reactions, onClick }: BlogCardProps) {
  return (
    <div className="blogCard__card" onClick={onClick}>
      <h1 className="blogCard__header">{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span className="blogCard__tags">
          {tags.map((tag) => "#" + tag).join()}
        </span>
        <span className="blogCard__reaction">{reactions}</span>
        <img src="/images/Our Top Restaurants/Star.svg" alt="" />
      </div>
      <p className="blogCard__text">{body}</p>
    </div>
  );
}
export default BlogCard;
