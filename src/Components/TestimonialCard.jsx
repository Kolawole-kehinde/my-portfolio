
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ avatar, name, title, company, feedback }) => (
  <div className="wrapper bg-gray-100  p-6 rounded-xl min-w-full sm:min-w-[50%] lg:min-w-[33.33%] snap-start">
    <div className="flex items-start gap-4 mb-4">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">
          {title} — <span className="text-indigo-600">{company}</span>
        </p>
      </div>
    </div>
    <p className="text-gray-700 text-[15px] leading-relaxed">{feedback}</p>
    <div className="flex text-yellow-400 mt-3">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={14} />
      ))}
    </div>
  </div>
);

export default TestimonialCard;
