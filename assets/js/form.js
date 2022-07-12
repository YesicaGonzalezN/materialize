$(document).ready(function(){
    $('select').formSelect();
});

//SERIALIZE & MODAL CONFIRMACION
$('#btn-submit').click(function (e) { 
    e.preventDefault();
    $('.modal').modal();

    let datos = $('#form-contact').serialize();
    console.log(datos); 
});