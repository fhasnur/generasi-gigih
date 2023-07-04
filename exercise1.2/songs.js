const songs = Promise.resolve([
    { title: "Song 1", artists: [{ name: "Artist 1" }], duration: 200 },
    { title: "Song 2", artists: [{ name: "Artist 2" }], duration: 250 },
    { title: "Song 3", artists: [{ name: "Artist 3" }], duration: 180 }
]);

export default songs;