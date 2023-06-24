import { forwardRef, useState } from "react";
import { Airline, Passenger } from "../typings";

interface PassengerProps {
  passenger: Passenger;
}


// this component is capable of receiving a ref, and uses ref only when it's the last component in the list.
const PassengerCard = forwardRef<HTMLDivElement, PassengerProps>(
  ({ passenger }, ref) => {
    const cardStyle = "mb-4 bg-white shadow-md rounded-lg p-4 w-96";
    return (
      <div ref={ref} className={cardStyle}>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{passenger.name}</h1>
          <span className="text-sm text-gray-700">
            Trips: {passenger.trips}
          </span>
        </div>
        {passenger.airline.map((airline: Airline) => {
          return <AirlineInfo airline={airline} key={airline._id+passenger._id} />;
        })}
      </div>
    );
  }
);

interface AirlineInfoProps {
  airline: Airline;
}

const AirlineInfo = ({ airline }: AirlineInfoProps) => {
  const [renderImage, setRenderImage] = useState(true);
  const handleImageErr = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    // e.currentTarget.src = "https://img.icons8.com/color/48/000000/airplane-take-off.png";
    
    setRenderImage(false);
  }
  return (
    <div className="mt-4 bg-gray-50 p-2 rounded">
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Airline:</span>
        <span className="text-sm text-gray-500">{airline.name}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Country:</span>
        <span className="text-sm text-gray-500">{airline.country}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Website:</span>
        <a
          href={airline.website}
          className="text-sm text-blue-500 hover:text-blue-600 duration-150"
        >
          {airline.website}
        </a>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Slogan:</span>
        <span className="text-sm text-gray-500">{airline.slogan}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">Head Quaters:</span>
        <span className="text-sm text-gray-500">{airline.head_quaters}</span>
      </div>
      <div className="flex justify-end items-center mt-2">
        {renderImage && <img src={airline.logo} alt="" className="h-8 w-8" onError={e => handleImageErr(e)} />}
        <span className="text-sm ml-5 text-gray-500">
          {airline.established} A.D.
        </span>
      </div>
      </div>
  );
};

export default PassengerCard;
