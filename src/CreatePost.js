import React from "react";

export const CreatePost = () => {
  /* const handleSubmit = (e) => {
    e.preventDefault(); 
  }; */
  return (
    <article>
      <form className="form_layout">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="paragraph">Paragraph</label>
          <input type="text" id="paragraph" name="paragraph" />
        </div>
        <div>
          <label htmlFor="userId">UserId</label>
          <input type="text" id="userId" name="userId" />
        </div>
        <button type="submit">AddPost</button>
      </form>
    </article>
  );
};
