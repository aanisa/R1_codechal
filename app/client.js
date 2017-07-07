var countries = require('countries.html');

console.loh(countries);
$(document).ready(function (){
 console.log('JS Loaded');

 appendText();
 appendForm();

}); //end doc.ready


function appendText() {
  $('.textArea').append( '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor risus,' +
  'hendrerit et elit quis, suscipit volutpat nisi. Donec condimentum bibendum magna ut tincidunt.' +
  'In pretium velit quis augue varius, quis tempor enim pharetra. Sed congue sollicitudin tellus.' +
  'Donec a condimentum sem. Duis ultricies vestibulum sagittis. In tristique quam lacus, vitae tempor' +
  'sapien vestibulum eu. Donec at luctus nisi, a ullamcorper nibh. Donec orci urna, ullamcorper a ante at,' +
  ' dignissim rutrum dolor. Praesent venenatis ipsum massa, sit amet lacinia magna ultrices pellentesque. ' +
  'In nec dapibus nunc, ut mattis dolor. Vestibulum ac justo nulla. </p>' +

  '<p> Sed imperdiet convallis turpis a pellentesque. Aenean facilisis placerat tincidunt.' +
  ' Mauris fermentum magna ac turpis volutpat tempor. Maecenas id fringilla eros, vel molestie lorem.' +
  ' Vivamus scelerisque odio ut tincidunt molestie. Quisque laoreet lorem condimentum fermentum tincidunt.' +
  ' Fusce fermentum aliquet dolor non dapibus.</p>' );
  //
  // '<p> Maecenas nibh ligula, dignissim luctus magna at, sagittis ullamcorper massa.' +
  // ' In lacinia lorem eget urna semper aliquam vel interdum est. Cras fermentum interdum pulvinar.' +
  // ' Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer elementum ligula non condimentum vehicula.' +
  // ' In pellentesque arcu ut mollis finibus. Donec eget felis sapien. Nunc non felis tristique, '
  // + 'elementum magna et, ultricies massa.</p>'

}

function appendForm() {
  $('.formContainer').append('<input placeholder="First name"></input>' +
                              '<input placeholder="Last name"></input>' +
                              '<input placeholder="Email address"></input>' +
                              '<input placeholder="Company"></input>' +
                              '<input placeholder="Title"></input>' +
                              '<select>' +
                              '<option value="">Please Select</option>' +
                              '<select>' +
                              '<select>' +
                              '<option value="">Please Select</option>' +
                              '<select>' +
                              '<input placeholder="additional comments"></input>' +
                              '<button> </button>'
  );
}
