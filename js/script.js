/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Is There More", "Emotionless", "Mob Ties", "Blue Tint", "Don't Matter to Me", "Final Fantasy"];
var images_links = ["http://thedjbenz.com/wp-content/uploads/2018/06/Drake%C2%B4s-Scorpion-album-is-released.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg", "https://media.giphy.com/media/9oBAcimGXXWJq/giphy.gif", "https://i.pinimg.com/736x/06/01/ec/0601ecc578aed2eb0400aacf2178637d.jpg", "https://i1.wp.com/theurbantwist.com/wp-content/uploads/2018/07/Scorpion.png?fit=758%2C758&ssl=1", "https://www.vladtv.com/images/size_fs/video_image-052843.jpg"];
var artists = ["Drake", "Drake", "Drake", "Drake", "Drake", "Drake"];
var songLengths = ["3:46", "5:02", "3:25", "2:42", "4:05", "3:39"];
var links = ["", "https://www.youtube.com/watch?v=qIXhOXfx-qY", "https://www.youtube.com/watch?v=pzAIhjxEemw ", "", "", "https://www.youtube.com/watch?v=k2qPYkgohtQ"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

// images_links.forEach(function(image){
//     $("#images").append("<img src=" + image + ">");
// });


songs.forEach(function(course) {
    $("#songs1", ":hover").css("transform", "scale(1.25)");
});




function displaySongInfo() {
    var i = 0;
    for(i = 0; i < songs.length; i++) {
        
        if (i % 3 == 1) {
            $("#songs2").append("<ul>" + songs[i] + "</ul>");
            $("#songs2").append("<img class='coverSong' src=" + images_links[i] + ">");
            $("#songs2").append("<ul>" + artists[i] + " " + "<a href='" + links[i] + "'> Listen </a>" + songLengths[i] + "</ul>");
            // put song name in song1
        }
        
        else if (i % 3 == 2) {
            $("#songs3").append("<ul>" + songs[i] + "</ul>");
            $("#songs3").append("<img class='coverSong' src=" + images_links[i] + ">");
            $("#songs3").append("<ul>" + artists[i] + "       " + "<a href='" + links[i] + "'> Listen </a>" + songLengths[i] + "</ul>");
            // put song name in song3
        }
        else if (i % 3 == 0) {
            $("#songs1").append("<ul>" + songs[i] + "</ul>");
            $("#songs1").append("<img class='coverSong' src=" + images_links[i] + ">");
            $("#songs1").append("<ul>" + artists[i] + "       " + "<a href='" + links[i] + "'> Listen </a>" + songLengths[i] + "</ul>");
            // put song name in song1
        }
    
    }
}



// BELOW Use forEach Loop to display the data from each of your array's in the correct div



function emptySongInfo() {
    $("#songs1").empty();
    $("#songs2").empty();
    $("#songs3").empty();
    // Use jQuery to empty all of the remaining divs
}

function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.
    var songName = $("#song").val();
    var artistName = $("#artist").val();
    var imglinks = $("#image").val();
    var link = $("#links").val();
    var songLength = $("#length").val();

    songs.push(songName);
    artists.push(artistName);
    images_links.push(imglinks);
    links.push(link);
    songLengths.push(songLength);
}

$("button").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

$("#start").click(function(){
    
});
