//JavaScript 

$(document).ready(function(e){
document.addEventlistener("deviceready",function(){

$('#beep').tap(function(){
navigator.notification.beep(3);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrar(1000);
});//tap vibrar

},false);//deviceready
});//ready