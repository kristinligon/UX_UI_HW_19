console.log("Index index.js file is loaded corrently!")

$(document).ready(function(){
    $(".donatebutton h2").hover(function(){
      $(this).css("background-color", "black");
      }, function(){
      $(this).css("background-color", "#396A4A");
    }, function(){
        $(this).css("border-radius", "5px");
      }, function(){
        $(this).css("border-radius", "5px");
    });
  });

  $(document).ready(function(){
    $(".navbar").hover(function(){
      $(this).css("background-color", "#396A4A");
      }, function(){
      $(this).css("background-color", "#E5F2E6");
    });
  });

  $(document).ready(function(){
    $(".volunteerlinks h3").hover(function(){
      $(this).css("background-color", "black");
      }, function(){
      $(this).css("background-color", "#396A4A");
    });
  });

/*$(document).ready(function(){
    $(".volunteertitle").click (function(){
      $(this).animate(shake 0.5s);
    });
  });

$(document).ready(function(){
    $(".navbarbuttons").hover(function(){
      $(this).css("background-color", "black");
      }, function(){
      $(this).css("background-color", "#396A4A");
    });
  });

$(".main img").hover(function(){
    $(".main img").slideToggle()
});

/*$(".signupbutton").click(function(){
    $(".signupbutton").css("background-color: black");
  });*/