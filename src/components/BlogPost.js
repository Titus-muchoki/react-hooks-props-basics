import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import Meh from "../Meh";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Meh myName = "I am gong  to be a start someday" />
    </div>
  );
}

export default BlogPost;
