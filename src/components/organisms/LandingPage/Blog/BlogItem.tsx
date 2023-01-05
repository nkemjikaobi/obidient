import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import { BlogProp } from "./Blog";

interface BlogItemProps {
  blog: BlogProp;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <div className="w-[377px] h-[552px] border border-obiGray-270 p-8">
      <Image alt="blog thumbnail" height={295} src={blog.imgUrl} width={422} />
      <div className="mt-8 flex items-center">
        <h3 className="text-24 mr-6">{blog.title}</h3>
        <p className="text-14">{blog.time}</p>
      </div>
      <hr className="my-4" />
      <p className="text-obiGray-350 mb-4">{blog.info}</p>
      <CustomButton
        customClass="!rounded-[5px] !border-obiGray-100 !text-obiGray-350 !bg-obiGray-100 hover:!bg-obiGray-250"
        handleClick={() => {}}
        size={ButtonProperties.SIZES.small}
        title="Read More"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};

export default BlogItem;
