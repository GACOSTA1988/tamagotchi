import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function(){
  $("#creation").submit(function(event){
    event.preventDefault();
    let myTamaName = $("#tamaName")
    let thisTama = new Tamagotchi(myTamaName, 10, 10);
console.log(myTamaName);





  });
});
