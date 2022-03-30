import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="flex h-8 mb-10 lg:mb-28 lg:justify-end text-3xl md:text-4xl text-right justify-evenly top-2">
      <a
        href="https://twitter.com/Shinobi_242"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter className="hover:text-primary-pink" />
      </a>
      <a
        className="lg:px-5"
        href="https://github.com/ericstlouis"
        aria-label="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub className="hover:text-primary-pink" />
      </a>
      <a href="https://www.instagram.com/eric_st.louis/">
        <AiFillInstagram
          className="hover:text-primary-pink"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
    </div>
  );
}

export default Nav