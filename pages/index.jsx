import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card/Card';
import fetch from 'isomorphic-unfetch';

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <h1>The best way to know avocados</h1>
      <section>
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          justify-content: center;
        }

        h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          text-align: center;
          text-transform: uppercase;
          font-size: 54px;
          margin-bottom: 90px;
        }
      `}</style>
    </div>
  )
}

export default HomePage
