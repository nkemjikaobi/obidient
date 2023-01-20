import React from "react";

import BlogItem from "./BlogItem";

export interface BlogProp {
  id: number;
  title: string;
  time: string;
  imgUrl: string;
  info: string;
}

const Blog = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-8 smallLaptop:px-24" id="blog">
      <h3 className="text-center text-40 mb-[114px]">Our Blog</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 smallLaptop:grid-cols-2 bigLaptop:grid-cols-3">
        {BlogData.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

const BlogData: BlogProp[] = [
  {
    id: 1,
    title: "Blog post headline",
    time: "12h ago",
    imgUrl: "/images/png/blog1.png",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.",
  },
  {
    id: 2,
    title: "Blog post headline",
    time: "12h ago",
    imgUrl: "/images/png/blog2.png",

    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.",
  },
  {
    id: 3,
    title: "Blog post headline",
    time: "12h ago",
    imgUrl: "/images/png/blog3.png",

    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.",
  },
];
