import { forwardRef } from "react";
import { Passenger } from "../typings";

interface PassengerProps {
  passenger: Passenger;
}


// this component is capable of receiving a ref, and uses ref only when it's the last component in the list.
const PassengerCard = forwardRef<HTMLDivElement, PassengerProps>(
  ({ passenger }, ref) => {
    const cardStyle = "mb-4 bg-white shadow-md rounded-lg p-4 w-80";
    return (
      <div ref={ref} className={cardStyle}>
        {passenger.name}
      </div>
    );
  }
);

export default PassengerCard;
