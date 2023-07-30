// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //display the current date on screen.
  var today = dayjs('dddd, MMM Do YYYY');
$("#currentDay").textContent = today;

  //listener on the save button
  $(".saveBtn").on("click", function() {
    //grab the description values
    var descriptionText = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");

    //save these in local storage.
    localStorage.setItem(timeOfDay, descriptionText);
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function trackTime() {
    //get the current hour
    var currentTime = dayjs().hour();
    
    //iterate over each block
    $(".time-block").each(function() {
      var currentBlock = parseInt($(this).attr("id").split("hour")[1]);
    
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
