$(document).ready(function(){
  $(".btn").on("click",publicar)
})

 function publicar (){
   var text = $("#entrada").val();
    $(".entradas").append(tarjeta(text));
 }

 function tarjeta (texto){
   var html = '<div class="row">'
       +'<div class="col-sm-6 col-md-4">'
        + '<div class="thumbnail">'
          + '<div class="caption">'
            +' <h3></h3>'
             +'<p>'+ texto +'</p>'
           +'</div>'
          +'<img src="img/viejo.jpg" alt="...">'
         +'</div>'
       +'</div>'
    + '</div>';
    return html;
 }
