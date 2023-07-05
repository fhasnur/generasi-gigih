const mockTrack = require("./mockTrack");

const setTimeOut = time => new Promise((resolve) => setTimeout(resolve, time));

const trackAsyncAwait = async (trackPromise) => {
    try {
        const response = await trackPromise;
        await setTimeOut(2000);
        printTrack(response);
    } catch (error) {
      console.error("Error:", error);
    }
}

const printTrack = (data) => {
    console.log("Track List:");
    data.map(track => {
      console.log(`Title: ${track.title}`);
      console.log(`Artist: ${track.artists[0].name}`);
      console.log(`Duration: ${track.duration}`);
      console.log("---------------");
    });
}
  
trackAsyncAwait(mockTrack);