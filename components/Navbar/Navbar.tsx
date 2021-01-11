import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav>
        <menu>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </menu>
      </nav>

      <style jsx>{`
        nav {
          box-shadow: 0px 0px 5px 0px gray;
          height: 80px;
          font-family: 'Roboto', sans-serif;
          display: flex;
          justify-content: center;
          margin-bottom: 100px;
        }

        menu {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 300;
          padding: 0 90px;
          width: 100%;
          max-width: 1200px;
        }

        .link {
          display: flex;
          align-items: center;
          justify-content: cetner;
        }

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          height: 100%;
          padding: 15px 30px;
          transition: all 0.5s;
        }

        a:hover {
          background-color: rgba(128, 128, 128, 0.1);
        }
      `}</style>
    </>
  )
}
