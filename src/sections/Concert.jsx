import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";

function Concert() {
  const upcomingConcerts = [
    { date: "2025-05-10", city: "Paris", venue: "Olympia" },
    { date: "2025-06-03", city: "Lyon", venue: "Halle Tony Garnier" },
    { date: "2025-07-15", city: "Marseille", venue: "Le Dôme" },
  ];

  const pastConcerts = [
    { date: "2024-12-20", city: "Toulouse", venue: "Zénith" },
    { date: "2024-11-18", city: "Lille", venue: "Le Splendid" },
    { date: "2024-10-05", city: "Bordeaux", venue: "Théâtre Fémina" },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center mt-5 px-4 md:px-8 lg:px-16 w-full"
      id="concert"
    >
      <h2 className="text-3xl font-bold text-[#EF901E] mb-8">Concerts</h2>

      <div className="w-full max-w-4xl">
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
            <div className="flex justify-start items-end">
              <CalendarDateRangeIcon className="w-8" />
              <p>Dates à venir</p>
            </div>
          </h3>
          <ul className="space-y-4">
            {upcomingConcerts.map((concert, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-xl shadow-lg"
              >
                <span className="font-medium">
                  {new Date(concert.date).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-sm text-gray-300">
                  {concert.city} – {concert.venue}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
            <div className="flex justify-start items-end">
              <ClockIcon className="w-8" />
              <p>Concerts passés</p>
            </div>
          </h3>
          <ul className="space-y-4">
            {pastConcerts.map((concert, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-800 text-gray-400 p-4 rounded-xl"
              >
                <span className="font-medium">
                  {new Date(concert.date).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-sm">
                  {concert.city} – {concert.venue}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concert;
