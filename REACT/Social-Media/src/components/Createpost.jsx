import { Form, redirect } from "react-router-dom";

const Createpost = () => {
  

  return (
    <Form method="POST" className="create">
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your User ID
        </label>
        <input
          type="text"
          placeholder="User ID"
          name="userId"
          className="form-control"
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          placeholder="How are you feeling today..?"
          name="title"
          className="form-control"
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Body
        </label>
        <textarea
          type="text"
          placeholder="Tell us more about it"
          name="body"
          rows={4}
          className="form-control"
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction in the post:
        </label>
        <input
          type="text"
          placeholder="Number of poeple reacted to your post.."
          name="reaction"
          className="form-control"
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          placeholder="Enter tags using a space in between"
          name="tags"
          className="form-control"
        />
        <div className="form-text"></div>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((post) => {
      });

  return redirect("/")
    }

export default Createpost;
