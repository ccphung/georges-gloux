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
  // Ajouter aux favoris
  function handleAddFavorites() {
    setFavorites((prev) => [...new Set([...prev, id])]);
  }

  // Retirer des favoris
  function handleRemoveFavorites() {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  }

  // Gérer la lecture de la chanson
  function handlePlay() {
    onSelectMenu("lyrics"); // Passer à l'onglet des paroles quand la chanson est jouée

    // Si la chanson est différente de la chanson en cours, la jouer
    if (id !== currentPlayingId) {
      setCurrentPlayingId(id);
    } else {
      // Si c'est la même chanson, la mettre en pause
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
        {/* Bouton des favoris */}
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

      {/* Lecteur audio */}
      <audio
        controls
        className="mt-2 w-[450px] max-w-[80vw]"
        onPlay={handlePlay}
        onPause={() => setCurrentPlayingId(null)} // Mettre en pause si la chanson est arrêtée
      >
        <source src={file} type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture de fichiers audio.
      </audio>
    </div>
  );
}

export default Song;
