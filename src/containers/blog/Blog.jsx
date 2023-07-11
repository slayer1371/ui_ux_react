import React from "react";
import  Article from "../../components/article/Article";
import { blog01, blog02,blog03,blog04,blog05} from "./imports"
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding">
      <div className="gpt3_blog_heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog_container">
        <div className="gpt3_blog_container_groupA">
          <Article imgurl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
        <div className="gpt3_blog_container_groupB">
          <Article imgurl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgurl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgurl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgurl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
