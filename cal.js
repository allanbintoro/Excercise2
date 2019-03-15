var box = document.getElementById( 'display' );

function addToScreen( x ) {

    box.value += x;

    if ( x == 'c' ) { box.value=''; }

    if( box.value.match( / [ ^ 0 - 9 + - = * / . %] / ) ) {

        box.value = "ERROR";

    }

} // closes addToScreen()

function answer() {

    x = box.value;

    x = eval( x );

    box.value = x;

} // closes answer()

function backSpace() {

    var number = box.value;

    var len = number.length - 1;

    var newNumber = number.substring( 0, len );

    box.value = newNumber;

} // closes backSpace()
function mode() {

}
function cube( y ) {

    x = box.value;

    x = Math.power( x, y );

    box.value = x;

} // closes multiply()