import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          Made with love by <span className="name">Juan Rios.</span>
        </p>
        <span>
          Visit my <a href="https://made-by.vercel.app/">portfolio</a>
        </span>
      </footer>

      <style jsx>{`
        footer {
          align-items: center;
          box-shadow: 0px 0px 5px 0px gray;
          display: flex;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 0.9rem;
          flex-wrap: wrap;
          height: 80px;
          justify-content: space-between;
          padding: 0 90px;
          width: 100%;
          margin-top: 100px;
        }

        a {
          text-decoration: none;
          font-weight: 500;
        }

        a:hover {
          text-decoration: underline;
          font-weight: 500;
        }

        .name {
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default Footer
