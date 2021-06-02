var header = document.getElementById('menu');
var mobiMenu = document.getElementsByClassName('search');
    mobiMenu.onclick = function() {
    var isClosed = header.clientHeight === 46.4;
    console.log('isClosed');
    if (isClosed) {
        header.clientHeight = 'auto';
    }
    else {
        header.clientHeight = '46.4';
    }
 }