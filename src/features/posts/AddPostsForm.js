import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);
  const dispatch = useDispatch();

  const onPostsClickSave = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((data) => {
    return (
      <option key={data.id} value={data.id}>
        {data.name};
      </option>
    );
  });

  return (
    <section>
      <h2>Add new Posts!</h2>
      <br />
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
      </form>

      <label htmlFor="userId">User:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChange}>
        <option value=""></option>
        {userOptions}
      </select>

      <form>
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onPostsClickSave} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
