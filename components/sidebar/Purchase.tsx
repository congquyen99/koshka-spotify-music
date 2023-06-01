"use client";

const Purchase = () => {
  return (
    <div className="flex flex-col p-4 text-black bg-white rounded-lg shadow-lg gap-y-2">
      <button className="w-12 px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full animate-[bounce_1.2s_ease-in-out_infinite] max-lg:hidden">
        New
      </button>
      <h2 className="font-extrabold capitalize ">
        make your account premium now!
      </h2>
      <p className="text-sm font-light  max-lg:hidden">
        Let's upgrade your music to new level without ads
      </p>
      <button className="px-4 py-2 font-semibold text-white transition duration-150 bg-blue-500 rounded-full hover:bg-blue-700">
        Get Premium
      </button>
    </div>
  );
};

export default Purchase;
