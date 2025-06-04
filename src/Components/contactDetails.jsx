import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";

export const contactDetails = [
  {
    icon: <MdAlternateEmail fontSize={20} className="text-red-500" />,
    label: "Email",
    value: "Kolawolekehinde7033@gmail.com",
  },
  {
    icon: <BsFillTelephoneForwardFill fontSize={20} className="text-red-500" />,
    label: "Phone",
    value: "+2348149121918",
  },
  {
    icon: <GrLocationPin fontSize={24} className="text-red-500" />,
    label: "Address",
    value: "Lagos, Nigeria.",
  },
];