import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import DetailsProduct from '@components/DetailsProduct/DetailsProduct'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState([])

  useEffect(() => {
    if (query.id) {
      fetch(`/api/avo/${query.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data)
        })
    }
  }, [query.id])

  if (product.length === 0) {
    return <h1>Loading...</h1>
  }

  return <>{product == null ? null : <DetailsProduct product={product} />}</>
}

export default ProductPage
