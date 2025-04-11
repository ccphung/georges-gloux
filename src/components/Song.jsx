import { HeartIcon } from "@heroicons/react/24/outline";

function Song({
  name,
  file,
  onSelect,
  lyrics,
  onSelectMenu,
  id,
  favorites,
  setFavorites,
}) {
  function handlePlay() {
    onSelectMenu("lyrics");
    onSelect(lyrics);
  }

  function handleAddFavorites() {
    setFavorites((prev) => [...new Set([...prev, id])]);
  }

  function handleRemoveFavorites() {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  }

  return (
    <div className="mt-3">
      <div className="text-xl text-white flex items-center">
        {!favorites.includes(id) ? (
          <button onClick={handleAddFavorites}>
            <HeartIcon className="w-6" />
          </button>
        ) : (
          <button onClick={handleRemoveFavorites}>
            <HeartIcon className="w-6" fill="orange" />
          </button>
        )}

        {name}
      </div>
      <audio onPlay={handlePlay} controls className="mt-2">
        <source src={file} type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture de fichiers audio.
      </audio>
    </div>
  );
}

export default Song;
