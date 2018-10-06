$('body').mouseleave(function () { // Show the modal when leaving the body

    $('#modal-offer').modal('show',true);
    $( this ).off(); // The modal will show just once
});