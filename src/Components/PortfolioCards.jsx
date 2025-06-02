import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { cards } from "../constant/cards";

const buttonColors = {
  purple: "bg-purple-500 hover:bg-purple-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  pink: "bg-pink-500 hover:bg-pink-600",
};

const overlayColors = {
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  pink: "bg-pink-500",
};

const PortfolioCards = () => {
 

  return (
    <div className="min-h-screen w-full bg-bgImage bg-cover bg-no-repeat flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <header className="text-center max-w-2xl mb-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Recent Projects</h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl">
          Explore my latest work, blending creativity and code for functional,
          responsive websites with clean design and seamless user experiences.
        </p>
      </header>

      {/* Cards Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cards?.map((card, idx) => (
          <article
            key={idx}
            className="w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              {/* <div className={`absolute inset-0 ${overlayColors[card.color]} opacity-30`} /> */}
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow bg-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{card.title}</h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">{card.description}</p>
              <a
                href={card.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md text-sm font-medium transition-shadow shadow-md ${buttonColors[card.color]}`}
              >
                View Demo <HiMiniArrowTopRightOnSquare className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
export default PortfolioCards;
