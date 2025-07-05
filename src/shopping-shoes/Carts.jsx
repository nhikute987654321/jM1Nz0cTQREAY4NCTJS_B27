export default function Carts(props) {
    const { carts, handleCartQuantity, handleDeleteCart } = props

    const openCart = () => {
        // if(document.getElementById("cart-modal").classList.contains("hidden"))
        //     document.getElementById("cart-modal").classList.remove("hidden");
        // else
        //     document.getElementById("cart-modal").classList.add("hidden");
    }

    return (
        <div>
            {/* Modal toggle */}
            <button
                data-modal-target="cart-modal"
                data-modal-toggle="cart-modal"
                className="z-[9999] block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => openCart()}
                id="openCart"
            >
                Open Cart
            </button>
            {/* Main modal */}
            <div
                id="cart-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <img className="size-20" src={item.image} alt="..." />
                                        </td>
                                        <td className="px-6 py-4">{item.price}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button
                                                disabled={item.quantity === 1}
                                                className="px-2 py-1 rounded-md border border-black text-black disabled:bg-gray-300"
                                                onClick={() => {
                                                    handleCartQuantity(item.id, -1)
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 rounded-md border border-black text-black"
                                                onClick={() => {
                                                    handleCartQuantity(item.id, 1)
                                                }}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">{item.price * item.quantity}</td>
                                        <td className="px-6 py-4 font-bold text-red-500 ">
                                            <button className="cursor-pointer"
                                                onClick={() => {
                                                    handleDeleteCart(item.id)
                                                }}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })}
                            <tr>
                                <td colSpan={4} className="text-right font-bold px-6 py-4">Tổng cộng:</td>
                                <td className="px-6 py-4 font-bold">
                                    {
                                        carts.reduce((total, item) =>
                                            total + (Number(item.price) * Number(item.quantity)), 0
                                        )
                                    }
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
