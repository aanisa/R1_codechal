
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
  ' Fusce fermentum aliquet dolor non dapibus.</p>' +

  '<p> Maecenas nibh ligula, dignissim luctus magna at, sagittis ullamcorper massa.' +
  ' In lacinia lorem eget urna semper aliquam vel interdum est. Cras fermentum interdum pulvinar.' +
  ' Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer elementum ligula non condimentum vehicula.' +
  ' In pellentesque arcu ut mollis finibus. Donec eget felis sapien. Nunc non felis tristique, ' +
   'elementum magna et, ultricies massa.</p>'  +

   '<p> Aliquam nec dui porta, aliquam nulla eu, tristique lorem. In convallis magna eu urna viverra,' +
   'a tristique ex malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ' +
   'cubilia Curae');

}

function appendForm() {
  $('.formContainer').prepend('<div class="form-group"> ' +
                              '<label for=""> First Name </label>' +
                              '<input class="form-control"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Last Name </label>' +
                              '<input class="form-control"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Email Address </label>' +
                              '<input class="form-control"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Company </label>' +
                              '<input class="form-control"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Title </label>' +
                              '<input class="form-control"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Additional Comments</label>' +
                              '<input class="form-control"></input> </div>');
  $('.formContainer').append('<div class="sub-btn"><button type="submit"' +
                              'class="btn btn-primary"> Submit </button>');
}
