import React from "react";
import Link from "next/link";
import { Brackets } from "lucide-react";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  tags: string[];
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  tags,
} : ProjectCardProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
      <div
        className="h-60 md:h-100 relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition ease-in-out duration-500 ">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              title="Ver repositório">
              <Brackets className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white py-6 px-4 h-[150px]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="tags pb-4 px-4">
        <div className="pt-4 flex items-center space-x-3 flex-wrap">
          {tags &&
            tags.map((tag, index) => (
              <p
                key={index}
                className="inline-block px-3 py-px mb-4 text-xs tracking-wider text-sm uppercase rounded-full bg-teal-500 text-white"
              >
                {tag}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;