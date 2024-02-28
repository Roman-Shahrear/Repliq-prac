import all_product from "./Assets/all_product";


export default function Cart() {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {all_product.map((product) => (
            <div key={product.id} className="m-4 rounded-md shadow-md flex flex-col items-center bg-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-46 object-cover" />
              <span className="w-full text-gray-500 bg-slate-200 text-xl font-bold text-center">
                ${product.new_price}
              </span>
              <hr className="mt-1 w-full border-1 border-black" />
              <h3 className="text-sm font-semibold text-center text-gray-500 bg-slate-200">{product.name}</h3>
            </div>
          ))}
        </div>
      );
}
