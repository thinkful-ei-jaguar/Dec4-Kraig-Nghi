/* eslint-disable strict */
// your code here
function submmission () {
  // listening for the form to submit
  $('#number-chooser').on('submit', event => {
    // Remove default form behavior to refresh page
    event.preventDefault();
    // Store the entered number
    let entry = $('#number-choice').val();

    // Countdown if datatype is a number
    if (Number(entry)){
      // Create a the result div in a box
      for (let i=0; i<=entry; i++){
        let box = $('.js-results').append($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }g
    // Print fizz if entry is fizz
    else if (entry === 'fizz'){
      let box = $('.js-results').append($('<div class=\'fizz-buzz-item fizz\'><span>fizz</span></div>'));
    }
    // Print buzz if entry is buzz
    else if (entry === 'buzz'){
      let box = $('.js-results').append($('<div class=\'fizz-buzz-item buzz\'><span>buzz</span></div>'));
    }
    // Print fizzbuzz if entry is fizzbuzz
    else if (entry === 'fizzbuzz'){
      let box = $('.js-results').append($('<div class=\'fizz-buzz-item fizzbuzz\'><span>fizzbuzz</span></div>'));
    }


  });
}

$(submmission);