const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="flex space-x-4 ">
      <img src={image} alt="" style={{borderRadius: '0 200px 200px 200px'}} className="h-[40%] w-[20%] md:h-[80%]"/>
      <div>
        <h2 className="uppercase">{name}--------------</h2>
        <h4>{recipe}</h4>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;
