// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //display the current date on screen.
  var todayDate = dayjs().format('dddd MMMM DD, YYYY');
$("#currentDay").html(todayDate);


  //listener on the save button
  $(".saveBtn").on("click", function() {
    //grab the description values
    var descriptionText = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");

    //save these in local storage.
    localStorage.setItem(timeOfDay, descriptionText);
  })

  function trackTime() {
    //get the current hour
    var currentTime = dayjs().hour();
    
    //iterate over each block
    $(".time-block").each(function() {
      var currentBlock = parseInt($(this).attr("id").split("-")[1]);

      //checks the current hour to determine if an hour is in the past, present or future.
      //If it's in the past add the past class, if its in the present add the present class..
      //Otherwise it's in the future class.  Only one of these three classes should be added at a time.
      if (currentBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (currentBlock === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  
  //pull the items from local storage if there are any, then invoke the time tracker function.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-1"));
  $("#hour-14 .description").val(localStorage.getItem("hour-12"));
  $("#hour-15 .description").val(localStorage.getItem("hour-3"));
  $("#hour-16 .description").val(localStorage.getItem("hour-4"));
  $("#hour-17 .description").val(localStorage.getItem("hour-5"));

  trackTime();
});
