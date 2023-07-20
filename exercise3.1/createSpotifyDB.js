const conn = new Mongo();
const db = conn.getDB("spotify");

db.createCollection("Songs");
db.createCollection("Artists");
db.createCollection("PopularSongs");

db.Songs.insertMany([
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
  },
  {
    title: "Dance Monkey",
    artist: "Tones and I",
    album: "The Kids Are Coming",
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
  },
  {
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
  },
  {
    title: "Sicko Mode",
    artist: "Travis Scott",
    album: "Astroworld",
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    album: "21",
  },
]);

db.Artists.insertMany([
  {
    name: "Ed Sheeran",
    date_of_birth: "1991-02-17",
    genres: ["Pop", "R&B"],
  },
  {
    name: "The Weeknd",
    date_of_birth: "1990-02-16",
    genres: ["R&B", "Pop"],
  },
  {
    name: "Billie Eilish",
    date_of_birth: "2001-12-18",
    genres: ["Pop", "Electropop"],
  },
  {
    name: "Tones and I",
    date_of_birth: "1999-08-15",
    genres: ["Pop", "Indie Pop"],
  },
  {
    name: "Mark Ronson",
    date_of_birth: "1975-09-04",
    genres: ["Pop", "Funk"],
  },
  {
    name: "Bruno Mars",
    date_of_birth: "1985-10-08",
    genres: ["Pop", "R&B"],
  },
  {
    name: "Dua Lipa",
    date_of_birth: "1995-08-22",
    genres: ["Pop", "Dance"],
  },
  {
    name: "Adele",
    date_of_birth: "1988-05-05",
    genres: ["Soul", "Pop"],
  },
  {
    name: "Travis Scott",
    date_of_birth: "1992-04-30",
    genres: ["Hip Hop", "Trap"],
  },
]);

db.PopularSongs.insertMany([
  {
    title: "Shape of You",
    play_count: 5000000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Blinding Lights",
    play_count: 4800000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Bad Guy",
    play_count: 4500000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Dance Monkey",
    play_count: 4200000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Uptown Funk",
    play_count: 4000000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Perfect",
    play_count: 3800000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Don't Start Now",
    play_count: 3700000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Someone Like You",
    play_count: 3600000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Sicko Mode",
    play_count: 3500000,
    period: "2023-01-01 to 2023-06-30",
  },
  {
    title: "Rolling in the Deep",
    play_count: 3400000,
    period: "2023-01-01 to 2023-06-30",
  },
]);

print("Database and collections created and populated successfully!");
