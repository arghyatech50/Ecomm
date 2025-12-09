import { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Winter Jacket",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
      quantity: 1,
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      quantity: 2,
    },
  ]);

  const increase = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }  
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-xl mt-40 font-semibold">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ---------------- LEFT SIDE: ITEMS ---------------- */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 p-5 rounded-xl shadow-md bg-white items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl shadow-sm"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 text-lg">₹ {item.price}</p>

                  {/* Quantity controller */}
                  <div className="flex items-center mt-3 space-x-3">
                    <button
                      onClick={() => decrease(item.id)}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                    >
                      <FaMinus size={12} />
                    </button>

                    <span className="px-4 py-1 bg-gray-100 rounded-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increase(item.id)}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                    >
                      <FaPlus size={12} />
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ---------------- RIGHT SIDE: SUMMARY ---------------- */}
          <div className="bg-white p-6 rounded-xl shadow-xl h-fit sticky top-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3 text-lg">
              <p>Total Items</p>
              <p>{items.length}</p>
            </div>

            <div className="flex justify-between mb-6 text-lg font-semibold">
              <p>Total Price</p>
              <p>₹ {total}</p>
            </div>

            <button className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


