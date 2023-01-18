
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
                dat=JSON.parse(dat);
                $("#respuesta").text(dat.msg);
                $("#idUsuarioOrigen").val("");
                $("#idUsuarioDestino").val("");
                $("#mensaje").val("");
            },
            error:(err)=>{
                $("#respuesta").text(err);
            }            
        });

    })

    $.ajax({
        url:"http://192.168.100.27/mvc/api",
        success:(datos)=>{
            let mensajes=JSON.parse(datos);
            let fila="";
            for (let index = 0; index < mensajes.length; index++) {
                const mensaje = mensajes[index];
                let msg=`<tr>
                <th scope="row">${mensaje.id}</th>
                <td>${mensaje.id_usuario_origen}</td>
                <td>${mensaje.id_usuario_destino}</td>
                <td>${mensaje.mensaje}</td>
                <td>${mensaje.fecha_envio}</td>
              </tr>`;
              fila+=msg;
            }
            $("#tbody").html(fila);
        },
        error:(err)=>{
            console.log(err);
        }
    })
}