import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu]=useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='Our Menu'></Cover>
       {/* main cover */}
     <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTitle>
     {/* offered menu item */}
     <MenuCategory items={offered}></MenuCategory>
     {/* dessert menu item */}
     <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
     {/* pizza menu item */}
     <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
     {/* soup menu item */}
     <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
     {/* salad menu item */}
     <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
