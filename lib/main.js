document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
      scrollOffset:0
    });
    var carousel = document.getElementById("galeria");
    console.log(carousel)

    //Tomando id de las cartas
    const card_mensual = document.getElementById("card-mensual");
    const card_tri = document.getElementById("card-trimestral");
    const card_anual = document.getElementById("card-anual");
    //Asignando click a las cartas
    card_mensual.addEventListener("click", showButon1);
    card_tri.addEventListener("click", showButon2);
    card_anual.addEventListener("click", showButon3);

    //Tomando id de los botones de las cartas
    const boton_mensual = document.getElementById("radio-mensual");
    const boton_tri = document.getElementById("radio-trimestral");
    const boton_anual = document.getElementById("radio-anual");
    //Asignando que desaparescan los botones
    boton_mensual.classList.add("radio-regis-none");
    boton_tri.classList.add("radio-regis-none");
    boton_anual.classList.add("radio-regis-none");

    //Funciones para mostrar el boton y apagar los demas
    function showButon1(){
      boton_mensual.classList.toggle("radio-regis-none");
      boton_tri.classList.add("radio-regis-none");
      boton_anual.classList.add("radio-regis-none");
    }
    function showButon2(){
      boton_tri.classList.toggle("radio-regis-none");
      boton_mensual.classList.add("radio-regis-none");
      boton_anual.classList.add("radio-regis-none");
    }
    function showButon3(){
      boton_anual.classList.toggle("radio-regis-none");
      boton_mensual.classList.add("radio-regis-none");
      boton_tri.classList.add("radio-regis-none");
    }
    //Funciones de alert
    const BtnRegis = document.getElementById("Regis_btn");
    BtnRegis.addEventListener("click", Regis_success);
    const BtnLogin = document.getElementById("Login_btn");
    BtnLogin.addEventListener("click", Login_success);

    function Regis_success(){
      Swal.fire({
        title: 'Registrado con exito',
        confirmButtonColor: '#802099',
        allowOutsideClick:false,
        background: '#212121',
        icon:'success',
        iconColor:'purple',
        allowEscapeKey: false,
        backdrop: `
          rgba(0,0,0,0.6)`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              window.location.href = "app.html";
            }
          })
    }
    function Regis_bad(){
      Swal.fire({
        title: 'Error al registrase',
        confirmButtonColor: '#802099',
        allowOutsideClick:false,
        background: '#212121',
        icon:'success',
        iconColor:'purple',
        allowEscapeKey: false,
        backdrop: `
          rgba(0,0,0,0.6)`
        })
    }
    function Login_success(){
      Swal.fire({
        title: 'Bienvenido',
        confirmButtonColor: '#802099',
        allowOutsideClick:false,
        background: '#212121',
        icon:'success',
        iconColor:'purple',
        allowEscapeKey: false,
        backdrop: `
          rgba(0,0,0,0.6)`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              window.location.href = "app.html";
            }
          })
    }function Login_bad(){
      Swal.fire({
        title: 'Error al inciar sesion',
        confirmButtonColor: '#802099',
        allowOutsideClick:false,
        background: '#212121',
        icon:'success',
        iconColor:'purple',
        allowEscapeKey: false,
        backdrop: `
          rgba(0,0,0,0.6)`
        })
    }

  });