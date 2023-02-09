$(document).ready(function(){
    $('#btn').click(function(e){
        e.preventDefault();
        if ($('#form')[0].checkValidity()) {

                $('.centro').html("<div id='form-mensagem'></div>");
                $("#form-mensagem").html("<h2>Formulário enviado com sucesso!</h2>")
                  .hide()
                  .fadeIn(1500);
             /*mensagem de sucesso  */

        }else {
           {
            alert("Por favor, preencha todos os campos !");
           
           
          }}
       
    })

     $('#telefone').mask('(00) 00000-0000');
     
  
   
     
}

   
)