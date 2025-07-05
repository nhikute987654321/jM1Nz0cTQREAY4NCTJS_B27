import { useState } from 'react'
import data from './data.json'
import ProductList from './ProductList'
import Carts from './Carts'
import ModalDetail from './ModalDetail'

export default function ShoesStore() {
    const [listProduct, setListProduct] = useState(data)
    const [productDetail, setProductDetail] = useState(listProduct[0])
    const [carts, setCarts] = useState([])

    const handleCartQuantity = (id, quantity) => {
        setCarts(
            carts.map((item) => {
                if (item.id !== id) return item
                return {
                    ...item,
                    quantity: item.quantity + quantity,
                }
            })
        )
    }

    const handleDeleteCart = (id) => {
        setCarts(carts.filter((item) => item.id !== id))
    }

    const handleAddCart = (shoe) => {
        const newCarts = [...carts]
        const index = newCarts.findIndex((item) => item.id === shoe.id)

        if (index === -1) {
            setCarts([...newCarts, { ...shoe, quantity: 1 }])
            return
        }

        newCarts[index].quantity += 1
        setCarts(newCarts)
    }

    const setStateModal = (product) => {
        setProductDetail(product);
    };

    return (
        <div className="container mx-auto">
            <Carts
                carts={carts}
                handleCartQuantity={handleCartQuantity}
                handleDeleteCart={handleDeleteCart}
            />
            <h1 className="text-5xl text-center mb-5">Shopping Shoes</h1>

            <ProductList products={listProduct} setStateModal={setStateModal} handleAddCart={handleAddCart} />
            <ModalDetail productDetail={productDetail} />
        </div>
    )
}
