// // Business Logic
// function strikeOut(taskItem){
//   $("ul#list").wrap("<strike>");
// }
// UI Logic
$(document).ready(function(){
  $("#to-do-list").submit(function(event){
    event.preventDefault();
    var task = $("input:text").val();

    $("ul#list").append("<li class='taskList'>" + task + "</li>");


    $(".taskList").click(function() {
      $(this).wrap("<del>");
    });
  });
});
