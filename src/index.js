import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DayOfTheWeek from './js/dayOfTheWeek.js';

// on submit read val of input, create new object with that val, call function
// that returns string containing day of week
//
// class DayOfTheWeek()

function displayDayOfWeek(day) {
  let dayOfWeek = new DayOfTheWeek(day);
  $('#day-output').text(dayOfWeek.getDayOfTheWeek());
}

$("#date-form").submit(function(event){
  event.preventDefault();

  let day = $("#date").val();
  displayDayOfWeek(day);
});