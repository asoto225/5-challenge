$(function () {

  // Click function, when its clicked it saves the inputted data (text and time) into 
  // local storage.
  $(".saveBtn").on("click", function (event) {
    event.preventDefault()
    var userInput = $(this).siblings("textarea").val()
    var timeBlk = $(this).parent().attr("id")
    console.log(userInput, timeBlk)

    localStorage.setItem(timeBlk, userInput)
  })

  var currntHour = dayjs().hour()
  console.log(currntHour)
  for (let i = 9; i <= 17; i++) {
    var timeBlk = "hour-" + i
    var storedUserInout = localStorage.getItem(timeBlk)
    $("#" + timeBlk).children("textarea").val(storedUserInout)
    if (currntHour < i) {
      // future times are green
      $("#" + timeBlk).addClass("future")
    } else if (currntHour === i) {
      //present times are red 
      $("#" + timeBlk).addClass("present")
    } else {
      // past times are grey 
      $("#" + timeBlk).addClass("past")
    }
  }
  // displays current date in the header
  $("#currentDay").text(dayjs().format('MM/DD/YYYY'))
});
