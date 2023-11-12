
import { Helmet } from 'react-helmet-async';
import FeatureItem from "../../FeatureItem/FeatureItem";
import PopularItem from "../../PopulerItem/PopularItem";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <FeatureItem></FeatureItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
