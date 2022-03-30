import { AiFillGithub } from "react-icons/ai";
import Link from 'next/link'

const WorkItem = ({project}) => {
  return (
    <div className="my-1.5 md:w-11/12 font-poppins text-white">
      <span className="text-base text-primary-secondary">&lt;Card&gt;</span>
      <div className="px-5 h-48  mt-2 py-2 rounded-lg bg-primary-card relative">
        <a
          href={project.github}
          className="absolute right-4 z-10 text-3xl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <AiFillGithub className="" />
        </a>
        <hh5 className="text-primary-pink mb-3 opacity-50 m-0">
          {project.web3 ? 'web3' : 'web2'}
        </hh5>
        <h2 className="text-primary-pink text-2xl">{project.name}</h2>
        <p className="font-extralight w-60 text-sm mb-6">
          {project.description}
        </p>
        <ul className="flex font-thin absolute bottom-2 md:bottom-3">
          {project.stack.map((stacks) => {
            return (
              <li key={stacks} className="px-1">
                {stacks}
              </li>
            );
          })}
        </ul>
      </div>
      <span className="text-base mt-2 float-right text-primary-secondary">
        &lt;/Card&gt;
      </span>
    </div>
  );
};

export default WorkItem;
