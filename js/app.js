// Global Variables



// var Player = {
    
// }



var winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var turn = 0;
var xArray = [];
var oArray = [];






$(document).ready(function() {

    $('.startScreen').show();

    
    $('#start').click(function(){
        $('.startScreen').fadeOut(1000);
    }); 

// winCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

$.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

// var odd = function isOdd() {

// }



	$('.game-square').click(clickBox);


    var checkWin = function(winCondition, player){  // when arrays are passed, only the two you want to check are passed here
    
    for(var i = 0; i < winCondition.length; i++){
        var current = winCondition[i];
        var correct = true;
        for(var j = 0; j < current.length; j++){
            var n = current[j];
            correct = correct && player.includes(n);
        }
        if(correct){
            return true;            
        }
    }
    return false;
}


    function clickBox(){
        
        if (turn % 2 == 0) {      // Checks if turn is even, if so it appends an X
        $(this).append('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
        $(this).find('.fa-times').animateCss('flipInX');  // Find the fa-times only within this current game square
        xArray.push($(this).data('number'));   // pushes the square that was clicked into xArray to be compared with win condition later 
        console.log(xArray);

        if (checkWin(winCondition, xArray)){  // call checkWin here when you can pass in the correct arrays
            winner('Player X');
        }
        } else {
        $(this).append('<i class="fa fa-circle-o fa-2x" aria-hidden="true"></i>');
        $(this).find('.fa-circle-o').animateCss('flipInY');
        oArray.push($(this).data('number'));
        console.log(oArray);
        if (checkWin(winCondition, oArray)){
            winner('Player O');
        }
        }

        $(this).off('click');   // Makes the click function only happen once.  After an X or O is appended to the square, it can't be clicked again.

        turn++;    
    
    }



    function winner(player) {
        $('.winner').fadeIn(500);
        $('.winner').append('<p> ' + player + ' has won!</p><p>Click New Game to play again.</p>');   
    }

    function reset() {
        $('.game-square').text('');
        $('.game-square').off('click');
        $('.game-square').on('click', clickBox);
        xArray = [];
        oArray = [];
        turn = 0;
        $('.winner').fadeOut(500);        

    }


    $('#newGame').click(function(){
        reset();
    });





});