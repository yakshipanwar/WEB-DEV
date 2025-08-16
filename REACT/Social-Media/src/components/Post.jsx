import { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { PostList } from "../store/Post-List-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList); 
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
        onClick={() => deletePost(post.id)}>
          <MdCancel />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} class="badge text-bg-primary heading">{tag}</span>
        ))}
        <div class="alert alert-success reaction" role="alert">
          This post has been liked by : {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
