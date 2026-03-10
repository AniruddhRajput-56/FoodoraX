import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Itemlist from "./Itemlist";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const [payment, setPayment] = useState("cod");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // 🧾 Calculate total
  const itemTotal = cartItems.reduce((sum, item) => {
    const info = item.card.info;
    return sum + (info.price || info.defaultPrice) / 100;
  }, 0);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const grandTotal = itemTotal + deliveryFee;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    setOrderSuccess(true);
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold m-2">Cart</h1>

      <div className="max-w-3xl mx-auto bg-white p-5 rounded-2xl shadow-md">

        {/* SUCCESS MESSAGE */}
        {orderSuccess && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg font-semibold">
            🎉 Order placed successfully via {payment.toUpperCase()}!
          </div>
        )}

        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems?.length === 0 ? (
          <h1>Cart is empty. Add Items to the cart!</h1>
        ) : (
          <>
            {/* CART ITEMS */}
            <Itemlist items={cartItems} />

            {/* BILL SUMMARY */}
            <div className="mt-6 border-t pt-4 text-left space-y-2">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹ {itemTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹ {deliveryFee}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>To Pay</span>
                <span>₹ {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* PAYMENT OPTIONS */}
            <div className="mt-6 text-left">
              <h2 className="font-semibold mb-2">Choose Payment Method</h2>

              <div className="space-y-2">
                <label className="flex gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                  />
                  Cash on Delivery
                </label>

                <label className="flex gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "upi"}
                    onChange={() => setPayment("upi")}
                  />
                  UPI
                </label>

                <label className="flex gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={payment === "card"}
                    onChange={() => setPayment("card")}
                  />
                  Card
                </label>
              </div>
            </div>

            {/* PLACE ORDER BUTTON */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

