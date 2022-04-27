const Song = require("./song");
const Playlist = require("./playlist");

class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO: answer here
    this.playlist.songs.push(song);
  }

  play() {
    // TODO: answer here
    if (this.playlist.isEmpty()) {
      return "";
    }

    let song = this.playlist.songs.shift();
    if (this.playlist.isRepeatable) {
      this.addSong(song);
    }

    return `Now Playing ${song.singer} - ${song.title}`;
  }
}

let playlist = new Playlist([], false);
const player = new MusicPlayer(playlist);
player.addSong(new Song("Tulus", "Hati-Hati di Jalan"));
player.addSong(new Song("TREASURE", "DARARI"));
player.addSong(new Song("NIKI", "Every Summertime"));
player.addSong(new Song("Pamungkas", "To The Bone"));

console.log(player.playlist.songs);
console.log(player.play()); // 1
console.log(player.playlist.songs);
console.log(player.play()); // 2
console.log(player.playlist.songs);
console.log(player.play()); // 3
console.log(player.playlist.songs);
console.log(player.play()); // 4
console.log(player.playlist.songs);
console.log(player.play()); // 5
