import React from 'react'

const Head = () => {
  return (
    <div className="text-white">
      <div className="text-center">
        <h1 className="text-5xl font-NTR text-primary-pink mb-2">
          <span className="text-sm text-primary-secondary">&lt;h1&gt;</span>
          Gm, I&apos;m eric
          <span className="text-sm text-primary-secondary">&lt;/h1&gt;</span>
        </h1>
        <h2 className="text-lg mb-3 font-NTR tracking-[.10em]	">
          <span className="text-sm tracking-[0] text-primary-secondary">
            &lt;h2&gt;
          </span>
          FULLSTACK WEB3 ENGINEER
          <span className="text-sm tracking-[0] text-primary-secondary">
            &lt;/h2&gt;
          </span>
        </h2>
        <p className="flex  font-poppins flex-col">
          <span className="text-sm mb-1 text-left text-primary-secondary">
            &lt;p&gt;
          </span>
          I&apos;m a Software Engineer interested in Open Source software,
          Blockchain development, A.I and most things tech.
          <span className="text-sm text-right float-right text-primary-secondary">
            &lt;/p&gt;
          </span>
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-primary-pink text-2xl font-NTR mb-2">
          <span className="text-base text-primary-secondary">&lt;h4&gt;</span>
          Tech I used:
          <span className="text-base text-primary-secondary">&lt;/h4&gt;</span>
        </h4>
        <span className="text-base text-primary-secondary">&lt;ul&gt;</span>
        <div className="flex justify-around	 font-NTR text-xl mt-2 ">
          <ul className="flex flex-col">
            <l1 className="">
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              React
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
            <l1>
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              Node.js
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
            <l1>
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              JavaScript ES6+
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
          </ul>
          <ul className="flex flex-col">
            <l1>
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              Solidity
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
            <l1>
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              Hardhat
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
            <l1>
              <span className="text-lg text-primary-secondary">&lt;li&gt;</span>
              Tailwindcss
              <span className="text-lg text-primary-secondary">
                &lt;/li&gt;
              </span>
            </l1>
          </ul>
        </div>
        <span className="text-base text-primary-secondary float-right ">
          &lt;/ul&gt;
        </span>
      </div>
    </div>
  );
}

export default Head