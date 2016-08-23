// Global Variables

// var Player = function {
//     this.x = '<i class="fa fa-times fa-2x" aria-hidden="true"></i>'

// };

var Player = {
    
}



var winCondition;
var turn = 0;
var xArray = [];
var oArray = [];






$(document).ready(function() {

    $('.startScreen').show();

    
    $('.start').click(function(){
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


	$('.game-square').click(function(e){
		// alert('you clicked')
        if (turn % 2 == 0) {      // Checks if turn is even
        $(this).append('<i class="fa fa-times fa-2x" aria-hidden="true"></i>');
		$(this).find('.fa-times').animateCss('flipInX');  // Find the fa-times only within this current game square
        xArray.push($(this).data('number'));   // pushes the square that was clicked into xArray to be compared with win condition later 
        console.log(xArray);
        } else {
        $(this).append('<i class="fa fa-circle-o fa-2x" aria-hidden="true"></i>');
        $(this).find('.fa-circle-o').animateCss('flipInY');
        oArray.push($(this).data('number'));
        console.log(oArray);
        }

        $(this).off('click');   // Makes the click funtion only happen once.  After an X or O is appended to the square, it can't be clicked again.

        turn++;       

	});




    function reset() {
        $('.game-square').text('');

    }


    $('#newGame').click(function(){
        reset();
    })





});