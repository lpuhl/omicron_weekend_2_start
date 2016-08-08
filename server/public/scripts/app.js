$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            // console.log(data);

            // I'm guessing it would be more elegant to have most of the code outside the ajax function, but hey, at least it works!

            createCarousel(data.omicron);
            featuredStudent();
            featuredBox();


            $('#next').on('click', function() {
                omicronIndex++;
                if (omicronIndex == 17) {
                  omicronIndex = 0;
                }
                featuredStudent();
                featuredBox();
            });

            $('#previous').on('click', function() {
                omicronIndex--;
                if (omicronIndex == -1) {
                  omicronIndex = 16;
                }
                featuredStudent();
                featuredBox();
            });

            function featuredStudent() {
                $(".featured-student").empty();
                $('.featured-student').append('<h2 class = "name">' + data.omicron[omicronIndex].name + '</h2><p><span class="github1">Github: </span><span class="github2">' + data.omicron[omicronIndex].git_username + '</span></p><p class="shoutout">' + data.omicron[omicronIndex].shoutout + '</p>');
            }



        }
    });
});

var omicronIndex = 0;

function featuredBox() {
    $('.box').css('width', '20px').css('height', '20px');
    var $el = $('#' + omicronIndex);
    $el.css('width', '50px').css('height', '50px');
}

function createCarousel(array) {
  for (var i = 0; i <array.length; i++) {
    var boxID = i;
    $('.carousel').append('<div class = "box" id="' + boxID + '"></div>');
  }
}
