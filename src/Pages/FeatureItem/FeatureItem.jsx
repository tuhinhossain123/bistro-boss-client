import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import './featured.css'


const FeatureItem = () => {
    return (
        <div className='featured-item bg:fixed text-white pt-5 mb-16'>
           <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
           <div className="md:flex justify-center text-white items-center py-8 pb-20 bg-slate-500 bg-opacity-60  px-24">
            <img src={featuredImg} alt=""  className="md:w-[40%]"/>
            <div className="space-y-4 ml-6">
                <h2>November,11,2023</h2>
                <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus maxime quidem sit repudiandae nihil delectus, facere doloremque voluptatem ab. Sapiente dignissimos quam nihil rerum asperiores quas eaque provident voluptatibus. Necessitatibus?</p>
                <button className="btn btn-outline border-0 border-b-4">Read More</button>
            </div>
           </div>
        </div>
    );
};

export default FeatureItem;