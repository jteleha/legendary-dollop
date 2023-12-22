$(function () {
  const currentHour = dayjs().hour();

  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    console.log('Hour from ID:', hour, 'Current Hour:', currentHour)

    if (hour < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (hour === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });
  
  var currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);

  $('.saveBtn').on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, userInput);
  });

  function savedEvents() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedEvent = localStorage.getItem(timeBlockId);
  
      if (savedEvent) {
        $(this).find(".description").val(savedEvent);
      }
    });
  }
  savedEvents();
});

