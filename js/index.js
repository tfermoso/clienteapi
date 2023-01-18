
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
    
  actualizarMensajes();
    
}

function actualizarMensajes(){
    $("#cargando").removeClass("d-none");
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
                <td><i id="msg${mensaje.id}" class="fa-solid fa-trash eliminarMensaje"></i></td>
              </tr>`;
              fila+=msg;
            }
            $("#cargando").addClass("d-none");
            $("#tbody").html(fila);
            $(".eliminarMensaje").click((t)=>{
                let idMensaje=t.currentTarget.id.substring(3);
                $.ajax({
                    url:"http://192.168.100.27/mvc/api/delete/"+idMensaje,
                    success:(resp)=>{
                        actualizarMensajes();
                    },
                    error:()=>{

                    }
                })
            })

        },
        error:(err)=>{
            console.log(err);
        }
    })
}