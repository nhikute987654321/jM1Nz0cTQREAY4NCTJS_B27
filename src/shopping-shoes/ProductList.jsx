import { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {

    let { products, handleAddCart, setStateModal } = props;
    
    const renderListProduct = () => {
        return products.map((product) => {
            return (
                <ProductItem
                    key={product.id}
                    product={product}
                    setStateModal={setStateModal}
                    handleAddCart={handleAddCart}
                />
            )
        })
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-5">{
                products && renderListProduct()
            }</div>
        </>
    )
}