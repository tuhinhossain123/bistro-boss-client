const FoodCard = ({item}) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=""
          className="w-full"
        />
      </figure>
      <p className="bg-slate-900 text-white mr-4 mt-4 absolute right-0 px-4 py-1 rounded">$ {price}</p>
      <div className="space-y-3 my-6">
        <h2 className="text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
