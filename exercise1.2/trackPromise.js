const mockTrack = require("./mockTrack");

const setTimeOut = time => new Promise((resolve) => setTimeout(resolve, time));

const trackPromise = (mockTrack) => {
  mockTrack
    .then((response) => {
      setTimeOut(2000)
        .then(() => {
          printTrack(response);
        });
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

const printTrack = (data) => {
  console.log("Track List:");
  data.map(track => {
    console.log(`Title: ${track.title}`);
    console.log(`Artist: ${track.artists[0].name}`);
    console.log(`Duration: ${track.duration}`);
    console.log("---------------");
  });
};

trackPromise(mockTrack);
