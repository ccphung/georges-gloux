import { useEffect, useState } from "react";
import Song from "../components/Song";
import songsList from "../data/data";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return width;
}

function Songs() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("songs");
  const [favorites, setFavorites] = useState([]);
  const [songs, setSongs] = useState(songsList);
  const [showFavorites, setShowFavorites] = useState(false);

  const width = useWindowWidth();

  function handleShowFav() {
    const filteredSongList = songsList.filter((song) =>
      favorites.includes(song.id)
    );
    setSongs(filteredSongList);
    setShowFavorites(true);
  }

  function handleHideFav() {
    setSongs(songsList);
    setShowFavorites(false);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h2 className="text-2xl font-semibold text-[#EF901E]">Mes Chansons</h2>

      {width < 960 && (
        <div className="flex border-slate-500 border-2 rounded-lg p-1 mt-5">
          <button
            onClick={() => setSelectedMenu("songs")}
            className={`transition-all duration-200 p-2 ${
              selectedMenu === "songs" ? "underline" : ""
            }`}
          >
            Chansons
          </button>
          <span className="mx-2 text-2xl">|</span>
          <button
            onClick={() => setSelectedMenu("lyrics")}
            className={`transition-all duration-200 p-2 ${
              selectedMenu === "lyrics" ? "underline" : ""
            }`}
          >
            Paroles
          </button>
        </div>
      )}

      <div className="max-w-[1048px] lg:grid lg:grid-cols-2  flex justify-center mt-5 ">
        <div
          className={`${
            width > 960 || selectedMenu === "songs" ? "" : "hidden"
          }`}
        >
          <button
            onClick={handleShowFav}
            className={`mt-4 py-2 px-6 text-white bg-orange-400 rounded-full hover:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
              showFavorites ? "hidden" : ""
            }`}
          >
            Voir mes favoris
          </button>
          <button
            onClick={handleHideFav}
            className={`mt-4 py-2 px-6 text-white bg-gray-400 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ${
              !showFavorites ? "hidden" : ""
            }`}
          >
            Voir toutes les chansons
          </button>

          {songs.map((song) => (
            <Song
              key={song.id}
              name={song.name}
              file={song.file}
              lyrics={song.lyrics}
              onSelect={setSelectedSong}
              id={song.id}
              onSelectMenu={setSelectedMenu}
              favorites={favorites}
              setFavorites={setFavorites}
              className="mt-5"
            />
          ))}
        </div>
        {(width > 960 || selectedMenu === "lyrics") && (
          <div className="p-4 border-grey-600 rounded w-[450px] h-[450px] text-white whitespace-pre-line overflow-x-auto bg-slate-600 text-center">
            {selectedSong || "Sélectionnez une chanson pour voir les paroles."}
          </div>
        )}
      </div>
    </div>
  );
}

export default Songs;
