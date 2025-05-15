// import React, { useEffect, useState } from "react";

// const stats = [
//   { label: "Years Of Experience", end: 6 },
//   { label: "Completed projects", end: 150 },
//   { label: "Awards", end: 12 },
//   { label: "Clients Worldwide", end: 321 },
// ];

// const Counter = () => {
//   const [counts, setCounts] = useState(stats.map(() => 0));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((count, i) =>
//           count < stats[i].end ? count + Math.ceil(stats[i].end / 50) : stats[i].end
//         )
//       );
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative z-[20] lg:-mt-20 -mt-14 wrapper rounded-3xl bg-gradient-to-br from-white to-purple-100 py-4 px-4 sm:px-6 md:px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center gap-4 sm:gap-6 md:gap-10">
//       {stats.map((stat, i) => (
//         <div
//           key={i}
//           className="flex flex-col items-center justify-center text-purple-900 font-bold"
//         >
//           <div className="text-xl sm:text-2xl lg:text-3xl">{counts[i]}+</div>
//           <div className="text-sm lg:text-base font-medium text-gray-700">
//             {stat.label}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Counter;
