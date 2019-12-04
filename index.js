
$('.thumbnail').on('click', e => {
    
    
    $(".hero img").attr('src', `${event.target.src}`);
  });