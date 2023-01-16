
window.onload=function(){
    console.log("cargando");
    $("#btnEnviar").click(()=>{
        console.log("enviando");
        let id_usuario_origen=$("#idUsuarioOrigen").val();
        let id_usuario_destino=$("#idUsuarioDestino").val();
        let msg=$("#mensaje").val();
        let datos={
            "id_usuario_origen":id_usuario_origen,
            "id_usuario_destino":id_usuario_destino,
            "mensaje":msg
        }
        $.ajax({
            type:"POST",
            url:"http://localhost/mvc/api/new",
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