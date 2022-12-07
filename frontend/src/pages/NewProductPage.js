import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'

const NewProductPage = () => {
  const { state } = useContext(UserContext)

  const [file, setFile] = useState()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [topProduct, setTopProduct] = useState('')

  const [image, setImage] = useState()

  const submit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append('image', file)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('countInStock', countInStock)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('topProduct', topProduct)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post('/api/products', formData, config)

    // console.log(imagePath)
    // console.log('data', data)

    const path = data.split('/')[1]
    console.log('path', path)
    setImage(path)
  }

  // const uploadFileHandler = async (e) => {
  //   const arrayOfFiles = Object.values(e.target.files)
  //   setProduct({
  //     ...product,
  //     images: arrayOfFiles,
  //   })
  // }

  // const addProduct = async () => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: `Bearer ${state.userInfo.token}`,
  //     },
  //   }

  //   const { data } = await axios.post('/api/products', product, config)
  //   console.log('data', data)

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
  // }

  // const handleInputChange = (event) => {
  //   setProduct({
  //     ...product,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  return (
    <div className="NewProductPage">
      <form onSubmit={submit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="countInStock">CountInStock</label>
          <input
            id="countInStock"
            name="countInStock"
            type="number"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="topProduct">Top product</label>
          <select
            id="topProduct"
            name="topProduct"
            value={topProduct && topProduct}
            onChange={(e) => setTopProduct(e.target.value)}
          >
            <option hidden>--</option>
            <option value={'false'}>No</option>
            <option value={'true'}>Yes</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="imageUpload">Choose a picture:</label>
          <input
            filename={file}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          />
        </div>
        {image && <img src={`/${image}`} width="100" />}
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
