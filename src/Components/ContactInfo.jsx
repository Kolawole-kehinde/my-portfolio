
import React from "react";

const ContactInfo = ({ details }) => (
  <div className="bg-bgImage bg-cover bg-no-repeat rounded-xl space-y-4 p-4 text-black shadow-xl relative overflow-hidden h-[250px]">
    <div className="space-y-3 relative z-10">
      {details.map(({ icon, label, value }, index) => (
        <div
          key={index}
          className="bg-[#d8c5fe] p-2 rounded-xl flex items-start gap-3 w-fit"
        >
          <div className="pt-2">{icon}</div>
          <div>
            <p className="font-bold text-lg">{label}</p>
            <p className="text-sm break-words">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfo;
