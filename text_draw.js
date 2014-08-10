$(document).ready (function ()
  {
    
  ////////////////////////////////////////////////////////////
    
  // when the left mouse is clicked down on the button
  $("#input_button").mousedown (function ()
    {
    $("#input_button").css (  // make the button look like it's being pressed down
      {
      "box-shadow": "4px 4px 1px rgba(0, 0, 0, .3)",
      "top": "4px",
      "left": "4px"
      });

    var text = $("#input_text").val();  // get the text from the box
    
    $("#draw_area").empty();  // clear the draw area

    var id = "";    // a unique id given to each letter's span
    var delay = 0;  // milliseconds, increases with each letter
    
    for (var t = 0; t < text.length; t += 1)  // loop through each letter in the text
      {
      id = "id" + t.toString();  // create a unique id
      
      // put the new letter in the draw div, sticking it in a span tage to we can style it and fade it in
      $("#draw_area").append ("<span class = 'letter' id = '" + id + "'>" + text[t] + "</span>");
      
      // the random letter styles
      var red   = Math.floor((Math.random() * 255));
      var green = Math.floor((Math.random() * 255));
      var blue  = Math.floor((Math.random() * 255));
      var size  = Math.floor((Math.random() * 15) + 15);
      var f     = Math.floor((Math.random() * 7));
      var font  = "arial";
      if (f === 1) font = "times";
      else if (f === 2) font = "courier";
      else if (f === 3) font = "verdana";
      else if (f === 4) font = "comic sans";
      else if (f === 5) font = "tahoma";
      else if (f === 6) font = "impact";

      $("#" + id).css (  // style that stuff
        {
        "color": "rgb(" + red + ", " + green + ", " + blue + ")",
        "font-size": size + "pt",
        "font-family": font,
        "display": "none"
        });
      $("#" + id).delay (delay).fadeIn();  // set a delay for fading in
      delay += 250;
      }
    });
    
  ////////////////////////////////////////////////////////////

  // when the left mouse is released over the button
  $("#input_button").mouseup (function ()
    {
    $("#input_button").css (  // make the button look like it's popping back up
      {
      "box-shadow": "8px 8px 2px rgba(0, 0, 0, .2)",
      "top": "0px",
      "left": "0px"
      });
    });
  });
