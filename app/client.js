var formObject = {};

$(document).ready(function (){

 appendText();
 appendForm();
 submitForm('.formContainer', formObject);

}); //end doc.ready


function submitForm(element, object) {
  $(element).on('submit', function(event) {
    event.preventDefault();

    object.firstName = $('#firstName').val();
    object.lastName = $('#lastName').val();
    object.email = $('#email').val();
    object.company = $('#company').val();
    object.title = $('#title').val();
    object.comments = $('#comments').val();
    object.state = $('#state').val();
    object.country = $('#country').val();

    formSummary('.formSummary');
  });
}

function formSummary(element) {
  $(element).append('<div class="summaryText">' +
                    '<h2 id="summaryTitle"> Form Summary </h2>' +
                    '<p>' + formObject.firstName + ' ' + formObject.lastName + '</p>' +
                    '<p>' + formObject.email + '</p>' +
                    '<p>' + formObject.company + formObject.title + '</p>' +
                    '<p>' + formObject.comments + '</p>' +
                    '<p>' + formObject.state + ', ' + formObject.country +'</p>' +
                    '</div>' );
  emptyInputFields();
}

function emptyInputFields() {
  $('#firstName').val('');
  $('#lastName').val('');
  $('#email').val('');
  $('#company').val('');
  $('#title').val('');
  $('#comments').val('');
  $('#state').val('');
  $('#country').val('');
}

function appendForm() {
  $('.formContainer').prepend('<div class="form-group"> ' +
                              '<label for=""> First Name </label>' +
                              '<input class="form-control" id="firstName"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Last Name </label>' +
                              '<input class="form-control" id="lastName"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Email Address </label>' +
                              '<input class="form-control" id="email"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Company </label>' +
                              '<input class="form-control" id="company"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Title </label>' +
                              '<input class="form-control" id="title"></input>' +
                              '</div>' +
                              '<div class="form-group"> ' +
                              '<label for=""> Additional Comments</label>' +
                              '<textarea class="form-control" id="comments"></textarea></div>');

  $('.formContainer').append('<div class="sub-btn"><button type="submit"' +
                              'class="btn btn-primary"> Submit </button>');
}


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
   'cubilia Curae; Phasellus ac est est. Phasellus porta tempus nisi at congue. Quisque ac nunc ac massa' +
   'consectetur porta. Curabitur at efficitur nulla, in lobortis ipsum. Cras eleifend elit at dui hendrerit,' +
  'eu molestie augue condimentum. Etiam maximus iaculis nibh, vel lacinia mi suscipit sed. Vestibulum tempus '+
   'sagittis erat vel maximus. Phasellus dignissim efficitur dapibus.');

}
