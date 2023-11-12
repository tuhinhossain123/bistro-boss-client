const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center space-y-6 my-14">
      <p className="text-yellow-500 text-xl mb-2"> --- {heading} ---</p>
      <p className="text-3xl uppercase border-y-2 py-4"> {subHeading}</p>
    </div>
  );
};

export default SectionTitle;
