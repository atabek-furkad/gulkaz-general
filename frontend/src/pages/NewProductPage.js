import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'

const NewProductPage = () => {
  const { state } = useContext(UserContext)
  const [product, setProduct] = useState({
    name: '',
    description: '',
    countInStock: '',
    category: '',
    price: '',
    images: [],
    topProduct: '',
  })

  useEffect(() => {
    console.log('product', product)
  }, [product])

  // const [files, setFiles] = useState([])

  // const config = {
  //   method,
  //   headers: {
  //     // 'Content-Type': 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: `Bearer ${state.userInfo.token}`,
  //   },
  //   body: JSON.stringify({
  //     name: product.name,
  //     description: product.description,
  //     countInStock: product.countInStock,
  //     category: product.category,
  //     price: product.price,
  //     // images: product.imageUpload,
  //     topProduct: product.topProduct,
  //   }),
  // }

  const uploadFileHandler = async (e) => {
    const arrayOfFiles = Object.values(e.target.files)
    setProduct({
      ...product,
      images: arrayOfFiles,
    })
  }

  const addProduct = async () => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${state.userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/products', product, config)
    console.log('data', data)

    // const formData = new FormData()
    // formData.append(
    //   'jsonBodyData',
    //   new Blob([JSON.stringify(product)], {
    //     type: 'application/json',
    //   }),
    // )
    // files.forEach((index) => formData.append('imageUpload', index))
    // console.log(...formData)
    // try {
    //   const response = await fetch('/api/products', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     body: formData,
    //   })
    //   const data = await response.json()
    // } catch (error) {}
    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // }
    // const { data } = await axios.post('/api/products', formData, config)
  }

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="NewProductPage">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addProduct()
        }}
      >
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="countInStock">CountInStock</label>
          <input
            id="countInStock"
            name="countInStock"
            type="number"
            value={product.countInStock}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="topProduct">Top product</label>
          <select
            id="topProduct"
            name="topProduct"
            value={product && product.topProduct}
            onChange={handleInputChange}
          >
            <option hidden>--</option>
            <option value={'false'}>No</option>
            <option value={'true'}>Yes</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="imageUpload">Choose a picture:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            multiple="multiple"
            // accept="image/png, image/jpeg, image/png"
            onChange={uploadFileHandler}
          />
        </div>
        {/* {pathList
          ? pathList.map((image, index) => {
              const path = image.slice(15)
              return <img width="100" key={index} src={path} alt="" />
            })
          : product.images.map((element, index) => {
              const path = element.slice(15)
              return <img src={path} alt="product" width="100" key={index} />
            })} */}
        <button type="Submit">Create</button>
      </form>
    </div>
  )
}

export default NewProductPage
