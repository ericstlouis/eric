import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="flex h-8 mb-10 lg:mb-28 text-3xl md:text-4xl justify-evenly top-2">
      <a href="https://twitter.com/Shinobi_242">
        <AiOutlineTwitter className="hover:text-primary-pink" />
      </a>
      <a href="https://github.com/ericstlouis">
        <AiOutlineGithub className="hover:text-primary-pink" />
      </a>
      <a href="https://www.instagram.com/eric_st.louis/">
        <AiFillInstagram className="hover:text-primary-pink" />
      </a>
    </div>
  );
}

export default Nav