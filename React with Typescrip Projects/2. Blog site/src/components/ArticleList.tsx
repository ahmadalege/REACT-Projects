import { useBlogs } from "../shared/BlogContext";
import { Blog } from "../types";
import ArtcleCard from "./ArtcleCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArtcleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
