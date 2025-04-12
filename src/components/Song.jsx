import { HeartIcon } from "@heroicons/react/24/outline";

function Song({
  name,
  file,
  onSelectMenu,
  id,
  favorites,
  setFavorites,
  isPlaying,
  setCurrentPlayingId,
  currentPlayingId,
}) {
  function handleAddFavorites() {
    setFavorites((prev) => [...new Set([...prev, id])]);
  }

  function handleRemoveFavorites() {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  }

  function handlePlay() {
    onSelectMenu("lyrics");

    if (id !== currentPlayingId) {
      setCurrentPlayingId(id);
    } else {
      setCurrentPlayingId(null);
    }
  }

  return (
    <div className="mt-3">
      <div
        className={`text-xl flex items-center gap-2 ${
          isPlaying ? "text-orange-500" : "text-white"
        }`}
      >
        <button
          onClick={
            favorites.includes(id) ? handleRemoveFavorites : handleAddFavorites
          }
        >
          <HeartIcon
            className={`w-6 ${favorites.includes(id) ? "fill-orange-500" : ""}`}
          />
        </button>
        {name}
      </div>

      <audio
        controls
        className="mt-2 w-[450px] max-w-[80vw]"
        onPlay={handlePlay}
        onPause={() => setCurrentPlayingId(null)}
      >
        <source src={file} type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture de fichiers audio.
      </audio>
    </div>
  );
}

export default Song;
