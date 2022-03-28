import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="flex absolute w-5/6 h-8 text-3xl justify-evenly top-2">
      <AiOutlineTwitter className='' />
      <AiOutlineGithub />
      <AiFillInstagram />
    </div>
  );
}

export default Nav