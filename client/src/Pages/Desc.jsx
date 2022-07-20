import React from 'react'

const Desc = () => {
    const detail = localStorage.getItem("productDetails")

    console.log(detail)
  return (
    <div>
      <h1>description</h1>
    </div>
  )
}

export default Desc
