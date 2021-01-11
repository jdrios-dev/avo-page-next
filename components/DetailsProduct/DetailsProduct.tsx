import React from 'react'

const DetailsProduct = ({ product }) => {
  return (
    <>
      <section>
        <div className="img-cont">
          <h1>{product.name}</h1>
          <img src={product.image} alt="" />
        </div>
        <div className="details-cont">
          <h2 className="description">Description: </h2>
          <p>{product.attributes.description}</p>
          <div className="flex">
            <h3>Shape: </h3>
            <p>{product.attributes.shape}</p>
          </div>
          <div className="flex">
            <h3>Taste: </h3>
            <p>{product.attributes.taste}</p>
          </div>
          <div className="flex">
            <h3>Price: </h3>
            <p>$ {product.price}</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          font-family: 'Roboto', sans-serif;
          width: 100%;
          justify-content: center;
        }

        h1 {
          text-align: center;
          font-weight: 500;
          font-size: 2rem;
        }

        h3 {
          font-weight: 500;
          width: 90px;
        }

        p {
          font-weight: 300;
        }

        img {
          width: 90%;
        }

        .description {
          font-weight: 500;
          margin-bottom: 30px;
        }

        .flex {
          display: flex;
          align-items: center;
          padding-top: 30px;
        }

        .img-cont {
          max-width: 300px;
        }

        .details-cont {
          width: 90%;
          max-width: 800px;
        }
      `}</style>
    </>
  )
}

export default DetailsProduct
