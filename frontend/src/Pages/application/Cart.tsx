import React from "react";
import { Link } from "react-router-dom";
import clothes_1 from "../../Assets/Img/clothes_1.png";
import clothes_2 from "../../Assets/Img/clothes_2.png";
import clothes_3 from "../../Assets/Img/clothes_3.png";

const OrderItem: React.FC<{
  item: { image: string, name: string, description: string, price: string }
}> = ({ item }) => (
  <div className="mb-2 flex items-center border rounded-lg p-2 bg-white">
    <img
      src={item.image}
      alt="Laundry Item"
      className="mr-4 h-16 w-16"
    />
    <div>
      <p className="font-semibold">{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  </div>
);

const Cart: React.FC = () => {
  const orderItems = [
    {
      image: clothes_1,
      name: "맞춤 세탁",
      description: "일반 의류 다림질 항균 추가",
      price: "30,000원"
    },
    {
      image: clothes_2,
      name: "프리미엄 세탁",
      description: "고급 의류 다림질 항균 추가",
      price: "50,000원"
    },
    {
      image: clothes_3,
      name: "신속 세탁",
      description: "신속 의류 다림질 항균 추가",
      price: "40,000원"
    },
    {
      image: clothes_3,
      name: "신속 세탁",
      description: "신속 의류 다림질 항균 추가",
      price: "40,000원"
    },
    {
      image: clothes_3,
      name: "신속 세탁",
      description: "신속 의류 다림질 항균 추가",
      price: "40,000원"
    },
    {
      image: clothes_3,
      name: "신속 세탁",
      description: "신속 의류 다림질 항균 추가",
      price: "40,000원"
    },
    {
      image: clothes_3,
      name: "신속 세탁",
      description: "신속 의류 다림질 항균 추가",
      price: "40,000원"
    }
  ];

  // Calculate item counts and total amount
  const itemCounts = orderItems.reduce((counts, item) => {
    counts[item.name] = (counts[item.name] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  const totalAmount = orderItems.reduce((total, item) => total + parseInt(item.price.replace(/[^0-9]/g, "")), 0);

  return (
    <div className="container mx-auto mt-5 w-full p-5 lg:w-2/3 lg:px-0">
      <header className="mb-5 border-b border-black pb-5">
        <h1 className="text-xl font-bold lg:text-3xl">장바구니</h1>
      </header>

      <div className="flex flex-col lg:flex-row lg:gap-5 bg-white">
        <div className="w-full mb-5 lg:w-2/3 lg:mb-0">
          <div className="flex flex-col rounded-lg border p-5 shadow-md h-96">
            <h2 className="mb-4 text-xl font-bold">주문상품</h2>
            <div className="overflow-y-auto">
              {orderItems.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div className="flex flex-col justify-between rounded-lg border h-auto p-5 shadow-md mb-5 flex-grow">
            <h2 className="mb-4 text-xl font-bold border-b border-gray-600 pb-2">상품 내역</h2>
            <div className="text-start text-black">
              {Object.entries(itemCounts).map(([name, count]) => (
                <p key={name} className="text-lg text-gray-500 font-bold">{name} x {count}</p>
              ))}
              <div className="flex justify-between">
                <p className="text-2xl font-bold mt-4">총 결제금액: </p>
                <p className="text-2xl font-bold mt-4">{totalAmount.toLocaleString()}원</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-5">
            <Link to="/application">
              <button className="rounded-lg w-full bg-green-500 px-6 py-3 text-xl text-white">
                세탁물 추가
              </button>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/payment">
              <button className="rounded-lg w-full bg-blue-500 px-6 py-3 text-xl text-white">
                결제하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
