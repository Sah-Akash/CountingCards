var count = 0;

function cc(card) {

  // Only change code below this line

  switch(card) {

    case 2:

    case 3:

    case 4:

       count = 1;

       break;

    case 5:

    case 6:

    case 7: 

    case 8:

    case 9:

       count = 0;

       break;

    case 10:

    case 'J':

    case 'Q':

    case 'K':

       count = -1;

       break;


     case 'A':
     	count = -2;

     	break;

  }

  var count = count + card;  

  if (count > 0) {

    return console.log(count + ' Bet');

  } else {

    return console.log(count + ' Hold');

  }

 

  // Only change code above this line

}

cc(5); cc(6); cc('A'); 