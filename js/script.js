/* global $ */
$("#newaccount").click(function(){
    $("#login_box").hide();
    $("#create").display();
    
});

var newGuest=[];
var account=$(".guestName").val();
newGuest.push(account);
$(".guestName").append("<li>"+ newGuest +"</li>");


$("#search-button").click(function(){
var searchInput = $("#search-song").val();
    console.log(searchInput);
    var request_url ="https://api.seatgeek.com/2/events?q=" + searchInput + "&client_id=MTY3NDA2NzZ8MTU1ODU1OTk3NC41Mg";

  $.ajax({
        url: request_url,
        method: "GET",
        success: function(response) {
            var eventsList = response.events;
            var firstEvent = eventsList[0];
            var firstEventTime = firstEvent.datetime_local;
            var firstEventTitle = firstEvent.title;
            var firstEventLowestPrice = firstEvent.stats.lowest_price;
            var secondEvent = eventsList[1];
                console.log(firstEventTime, firstEventTitle, firstEventLowestPrice,);
            $(".details").append("<ul> " + searchInput + " </ul>","<ul> " + firstEventTime + " </ul>","<ul>" + firstEventTitle + " </ul>","<ul> $" + firstEventLowestPrice + " </ul>");
        }
    }); 
});
// BELOW Update the songs array with four of your favorites songs.
var songs = ["Friend Like Me", "Emotionless", "Mob Ties", "Sunflower", "Don't Matter to Me", "Blizzard"];
var images_links = ["https://i.pinimg.com/736x/6d/9f/9a/6d9f9acb5ea6298c5ef5b925406d6b7a.jpg", "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg", "https://media.giphy.com/media/9oBAcimGXXWJq/giphy.gif", "https://images-na.ssl-images-amazon.com/images/I/71woXNTh5jL._SL1500_.jpg", "https://i1.wp.com/theurbantwist.com/wp-content/uploads/2018/07/Scorpion.png?fit=758%2C758&ssl=1", "https://www.picclickimg.com/d/l400/pict/283362169415_/Dragon-Ball-Super-Movie-Poster-Broly-Gogeta-Goku.jpg"];
var artists = ["Will Smith", "Drake", "Drake", "Post Malone,Swae Lee", "Drake", "Daichi Muira"];
var songLengths = ["2:27", "5:02", "3:25", "2:41", "4:05", "2:00"];
var links = ["https://www.youtube.com/watch?v=DYxrVBu2_gc", "https://www.youtube.com/watch?v=qIXhOXfx-qY", "https://www.youtube.com/watch?v=pzAIhjxEemw ", "https://www.youtube.com/watch?v=ApXoWvfEYVU", "https://www.youtube.com/watch?v=cY5qcEyUZf", "https://www.youtube.com/watch?v=qkPSlLaA5mQ"];
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
            $("#songs2").append("<ul>" + artists[i] + "      " + "<a href='" + links[i] + "'> Listen </a>" + songLengths[i] + "</ul>");
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
var search= $("#search").val();
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

