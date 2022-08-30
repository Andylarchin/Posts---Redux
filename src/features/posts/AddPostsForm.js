import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import React from "react";

import { postAdded } from "./postsSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();

  const onPostsClickSave = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title: title,
          content: content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add new Posts!</h2>
      <br/>
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

      <form>
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onPostsClickSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
