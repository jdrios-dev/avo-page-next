import React from 'react'
import Link from 'next/link'

export const Card = ({ product }) => {
  const { name, image, id } = product

  return (
    <>
      <Link href={`/product/${id}`}>
        <article>
          <h2>{name}</h2>
          <img src={image} alt="name" />
        </article>
      </Link>

      <style jsx>{`
        article {
          border: 1px solid gray;
          border-radius: 30px;
          margin: 0 10px 30px 10px;
          max-width: 400px;
          text-align: center;
          width: 100%;
          cursor: pointer;
          transition: all 0.3s;
        }

        article:hover {
          transform: scale(1.01);
        }

        h2 {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          padding: 30px 0 15px;
        }
      `}</style>
    </>
  )
}
