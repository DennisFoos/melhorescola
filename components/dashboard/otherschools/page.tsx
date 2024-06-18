import Carousel from "@/components/dashboard/otherschools/carousel";

interface OtherSchoolsProps {}

const OtherSchools: React.FC<OtherSchoolsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 justify-around bg-purple-300 shadow shadow-purple-700 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] p-10 rounded-2xl">
      <p className="text-2xl font-bold">Other schools near you</p>
      <div className="flex justify-between">
        <p className="text-slate-700">Showing {} near Greater London</p>
        <a href="#" className="text-blue-500 underline hover:text-blue-700">See all schools</a>        
      </div>
        <Carousel />
    </div>
  );
};

export default OtherSchools;