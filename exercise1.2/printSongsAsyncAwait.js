const songs = require("./songs");

const printSongsAsyncAwait = async (songPromise) => {
    try {
        const songs = await songPromise;
        printSongList(songs);
    } catch (error) {
      console.error("Error:", error);
    }
}

const printSongList = (songs) => {
    console.log("Songs List:");
    songs.map(song => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
      console.log("---------------");
    });
}
  
printSongsAsyncAwait(songs);  