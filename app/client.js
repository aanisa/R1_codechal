$(document).ready(function (){
 console.log('JS Loaded');

 appendText();

}); //end doc.ready


function appendText() {
  $('.textArea').append('<p>Lorum Impsum Text To Go Here ~ 3 paragraphs</p>');
}
