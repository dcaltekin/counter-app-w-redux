import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Arttir, Azalt, InputDeger } from "../redux/counter/counterSlice";

function Home() {
  const countValue = useSelector((state) => state.hx.value);
  const lastMessage = useSelector((state) => state.hx.deger);
  const dispatch = useDispatch();
  const [inputD, setInputD] = useState(2);

  return (
    <div className="text-center mt-16">
      <div className="text-3xl">Redux'tan Gelen Değer: {countValue}</div>
      <div className="my-8">
        <button
          className="text-xl inline-block px-6 py-2.5 bg-green-500 text-white leading-tight  rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => dispatch(Arttir())}
        >
          +1 Arttır
        </button>
        <button
          className="text-xl inline-block px-6 py-2.5 bg-red-600 text-white leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => dispatch(Azalt())}
        >
          -1 Azalt
        </button>
      </div>
      <div className="my-8 text-3xl">{lastMessage}</div>
      <div className="my-8 text-3xl">Değer Aralığı Giriniz:</div>
      <div>
        <input
          className="    
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="number"
          min="2"
          value={inputD}
          onChange={(e) => setInputD(e.target.value)}
        />
        <button
          className="text-xl inline-block px-6 py-2.5 bg-purple-600 text-white leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => dispatch(InputDeger(inputD))}
        >
          +{inputD} Arttır
        </button>
      </div>
    </div>
  );
}

export default Home;
