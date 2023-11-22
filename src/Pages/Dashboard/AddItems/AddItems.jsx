import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if(res.data.success){
      const menuItem={
        name: data.name,
        category:data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes= await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Add an Ite"
        subHeading="Whats's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
            <input />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <select defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price name"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
              <input />
            </div>
          </div>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered w-full"
            placeholder="Recipe Details"
          ></textarea>
          <div className="form-control w-full my-2">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn my-2">
            Add Items <FaUtensils className="ml4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
