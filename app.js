const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const playlist = [
  {
    title: "track_1",
    artist: "artist_1",
    url: "https://example.com/1",
  },
  {
    title: "track_2",
    artist: "artist_2",
    url: "https://open.spotify.com/intl-id/track/2OAEKEb0778gsDaCef7MLI?si=bb2022ab7a694b9a",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { playlist: playlist });
});
app.get("/form", (req, res) => {
  res.render("form.ejs");
});
app.post("/add", (req, res) => {
  const newSong = { title, artist, url } = req.body;
  playlist.push({ title, artist, url });
  res.status(201);
  res.send(newSong);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});