document.onload=function(){
    $("#btnEnviar").click(()=>{
        let id_usuario_origen=$("#idUsuarioOrigen").val();
        let id_usuario_destino=$("#idUsuarioDestino").val();
        let msg=$("#mensaje").val();

        $.ajax({
            type:"POST",
            url:"localhost/mvc/api/new",
            data:datos,
            success:(dat)=>{
                console.log(dat);
            },
            error:(err)=>{
                console.log(err);
            }            
        });

    })
}