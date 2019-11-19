import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Tamagotchi } from './../src/tamagotchi.js';


    $(document).ready(function(){
      $("#creation").submit(function(event){
        event.preventDefault();
        let myTamaName = $("#tamaName").val();
        let thisTama = new Tamagotchi(myTamaName, 10, 10);
        thisTama.setHealth();
        thisTama.setFood();
        thisTama.didTamagotchiLive();


        $("#feedBtn").click(function() {
          thisTama.feed();
        });
        $("#hugBtn").click(function() {
          thisTama.hug();
        });


      });
    });
