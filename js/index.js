var rows = 16;
var cols = 16;

var $row = $("<div />", {
  class: 'row'
});

var $square = $("<div />", {
  class: 'square'
});

$(document).ready(function() {
	$('.square').css("background-color","white");
  for (var i = 0; i < cols; i++)
    $row.append($square.clone());

  for (var j = 0; j < rows; j++)
    $("#container").append($row.clone());
  
  $('.square').hover(function(){
    $(this).css("background-color","yellow");
  });
  
  $('#button').click(function(){
    $('.square').css("background-color","white");
    var gridSize = prompt("Enter a new grid size:");
    while(gridSize < 1 || gridSize > 128){
      gridSize = prompt("Grid Size must be between 1 and 128");
    }
      
    $('#container').empty();
    $($row).empty();

    for (var i = 0; i < gridSize; i++)
    	$row.append($square.clone());

 		for (var j = 0; j < gridSize; j++)
    	$("#container").append($row.clone());
    
    var newHeight = (960/gridSize)/3;
    $('.row').css("height",newHeight);
    $('.square').css("width",newHeight);
    $('.square').css("height",newHeight);
    
    $('.square').hover(function(){
    $(this).css("background-color","yellow");
  });
  });
});