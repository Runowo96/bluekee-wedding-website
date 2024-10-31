import React from 'react'
import './ProductLines.scss'
import Products from '../Products/Products'
import guestData from '../../data/guest-product-data.json'
import tableData from '../../data/table-product-data.json'
import roomData from '../../data/room-product-data.json'

function ProductLines() {
    const guest = "FOR THE GUESTS"
    const table = "FOR THE TABLE"
    const room = "FOR THE ROOM"
  return (
    <div className='product-line-cont'>
    <h2 className='header'>A LA CARTE</h2>
      <Products data = {guestData} name = {guest} />
      <Products data = {tableData} name = {table} />
      <Products data = {roomData} name = {room} />
    </div>
  )
}

export default ProductLines
