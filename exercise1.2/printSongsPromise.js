import songs from "./songs";

const songsPromise = (songPromise) => {
    songPromise
      .then((songs) => {
		printSongList(songs);
      })
      .catch(error => {
        console.error("Error:", error);
      });
};

const printSongList = (songs) => {
	console.log("Songs List:");
	songs.forEach(song => {
		console.log(`Title: ${song.title}`);
		console.log(`Artist: ${song.artists[0].name}`);
		console.log(`Duration: ${song.duration}`);
		console.log("---------------");
	});
};
    
songsPromise(songs);