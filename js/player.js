class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(name) {
        this.name = name
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.name}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()

// Store artists/albums within an array
const albums = ['Operation Ivy - Energy', 'Blink 182 - Dude Ranch', 'New Found Glory - Sticks and Stones']

// Bind that array to the drop down menu on the web page
let dropdow = document.getElementById('artAlbums')
let options=''
albums.map((op,i)=>{
         options+=`<option value='${op}' id='${i}'>${op}</option>`
      })
console.log(options)
dropdow.innerHTML = options

// In code, iterate through the array and programmatically create new Album class instances based on each album within the array. 
// You’ll also need to add these instances to the player.
albumsList = []
for (let i = 0; i < albums.length; i++) {

   // albumsList[i] = new Album(albums[i])
    window["album"+i] = new Album(albums[i]);
    jbox.addAlbum(window["album"+i])

}

// Add a "play" button to the web page. Add “show my favorite album” button

const playBtn = document.getElementById("play");
const favBtn = document.getElementById("favorite");

playBtn.addEventListener("click", playButton);
function playButton() {
    window['album' + document.getElementById('artAlbums').selectedIndex].play()
    console.log(`Play album ${document.getElementById('artAlbums').value}`)
}
favBtn.addEventListener("click", favButton);

function favButton() {
    document.getElementById('favoriteAlbum').innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
}
