/*
 * Returns a greeting based on the time of day of a date.
 * Morning is midnight to noon, afternoon is noon to five,
 * otherwise it's the evening.
 */
var dateGreeting = function(date) {
  var hours = date.getHours();
  if(hours < 12) {
    return 'Good morning';
  }
  else if(hours < 17) {
    return 'Good afternoon';
  }
  else {
    return 'Good evening';
  }
}

var morning = new Date(2013, 8, 30, 2, 34);
document.write('<p>' + morning.toString() +
  ' -> ' + dateGreeting(morning) + '</p>');
var afternoon = new Date(2013, 8, 30, 13, 00);
document.write('<p>' + afternoon.toString() +
  ' -> ' + dateGreeting(afternoon) + '</p>');
var evening = new Date(2013, 8, 30, 21, 00);
document.write('<p>' + evening.toString() +
  ' -> ' + dateGreeting(evening) + '</p>');