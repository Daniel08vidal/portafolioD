//      MENU

((d) => {
  "use stric";
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

// ANIMATION FOOTER

((d) => {
  let animado = d.querySelectorAll(".contact-active");
  $menu2 = d.querySelector(".footer_contact");

  for (let i = 0; i < animado.length; i++) {
    animado[i].addEventListener("click", (e) => {
      if (!e.target.matches("a .contact-active"))
        setTimeout(function () {
          $menu2.classList.add("clicksi");
        }, 1000);
      $menu2.classList.remove("clicksi");
    });
  }
})(document);

//PROJECTS

((d) => {
  d.addEventListener("DOMContentLoaded", function () {
    let imagenes = [
      { img: "assets/publipep_1.png" },
      { img: "assets/publipep_2.png" },
      { img: "assets/publipep_3.png" },
      { img: "assets/publipep_4.png" },
      { img: "assets/publipep_5.png" },
      { img: "assets/publipep_6.png" },
      { img: "assets/publipep_7.png" },
      { img: "assets/publipep_8.png" },
      { img: "assets/publipep_9.png" },
      { img: "assets/publipep_10.png" },
      { img: "assets/contamos_1.png" },
      { img: "assets/contamos_2.png" },
      { img: "assets/contamos_3.png" },
      { img: "assets/contamos_4.png" },
      { img: "assets/contamos_5.png" },
      { img: "assets/coot_1.png" },
      { img: "assets/coot_2.png" },
      { img: "assets/coot_3.png" },
      { img: "assets/proyecto4.png" },
      { img: "assets/proyecto5.png" },
      { img: "assets/proyecto6.png" },
      { img: "assets/proyecto7.png" },
    ];

    let contador = 0;
    const contenedor = d.querySelector(".slideshow");
    const overlay = d.querySelector(".overlay");
    const galeria_imagenes = d.querySelectorAll(".projects_grid img");
    const img_slideshow = d.querySelector(".slideshow img");

    contenedor.addEventListener("click", function (event) {
      let atras = contenedor.querySelector(".atras"),
        adelante = contenedor.querySelector(".adelante"),
        img = contenedor.querySelector("img"),
        tgt = event.target;

      if (tgt == atras) {
        if (contador > 0) {
          img.src = imagenes[contador - 1].img;
          contador--;
        } else {
          img.src = imagenes[imagenes.length - 1].img;
          contador = imagenes.length - 1;
        }
      } else if (tgt == adelante) {
        if (contador < imagenes.length - 1) {
          img.src = imagenes[contador + 1].img;
          contador++;
        } else {
          img.src = imagenes[0].img;
          contador = 0;
        }
      }

      loads(contador);
    });

    function loads(contador) {
      const galeria_texto = d.querySelector(".informacion .informacion1");
      const galeria_texto2 = d.querySelector(".informacion .informacion2");
      const galeria_texto3 = d.querySelector(".informacion .informacion3");
      const galeria_texto4 = d.querySelector(".informacion .informacion4");
      const galeria_texto5 = d.querySelector(".informacion .informacion5");
      const galeria_texto6 = d.querySelector(".informacion .informacion6");
      const galeria_texto7 = d.querySelector(".informacion .informacion7");
      if (contador == 0 || contador < 10) {
        galeria_texto.style.display = "block";
      } else {
        galeria_texto.style.display = "none";
      }
      if (contador > 9 && contador < 15) {
        galeria_texto2.style.display = "block";
      } else {
        galeria_texto2.style.display = "none";
      }
      if (contador > 14 && contador < 18) {
        galeria_texto3.style.display = "block";
      } else {
        galeria_texto3.style.display = "none";
      }
      if (contador > 17 && contador < 19) {
        galeria_texto4.style.display = "block";
      } else {
        galeria_texto4.style.display = "none";
      }
      if (contador > 18 && contador < 20) {
        galeria_texto5.style.display = "block";
      } else {
        galeria_texto5.style.display = "none";
      }
      if (contador > 19 && contador < 21) {
        galeria_texto6.style.display = "block";
      } else {
        galeria_texto6.style.display = "none";
      }
      if (contador > 20 && contador < 22) {
        galeria_texto7.style.display = "block";
      } else {
        galeria_texto7.style.display = "none";
      }
    }
    Array.from(galeria_imagenes).forEach((img) => {
      img.addEventListener("click", (event) => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar;
        img_slideshow.src = imagenes[imagen_seleccionada].img;
        contador = imagen_seleccionada;
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        contenedor.style.transform = "translateY(0%)";
        loads(contador);
      });
    });

    d.querySelector(".btn_cerrar").addEventListener("click", () => {
      contenedor.style.transform = "translateY(-200%)";

      setTimeout(function () {
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
      }, 600);
    });

    window.addEventListener("click", function (e) {
      if (e.target == overlay) {
        contenedor.style.transform = "translateY(-200%)";

        setTimeout(function () {
          overlay.style.opacity = 0;
          overlay.style.visibility = "hidden";
        }, 600);
      }
    });
  });
})(document);

// SCROLL ANIMADO
((d) => {
  let animado = d.querySelectorAll(".animado");
  function mostrarScroll() {
    let scrollTop = d.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 400 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);
})(document);

// ANIMATION START
((d) => {
  let animado2 = d.querySelector(".start_texts");
  function mostrarScroll2() {
    let scrollTop = d.documentElement.scrollTop;
    animado2.style.transform = "translate(0px," + scrollTop / 2 + "%)";
  }

  window.addEventListener("scroll", mostrarScroll2);
})(document);

// ANIMATION START
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  const $btnSwitch = d.querySelector("#switch");
  $menu_dos = d.querySelector(".menu");

  $btnSwitch.addEventListener("click", () => {
    $btnSwitch.firstElementChild.classList.toggle("none");
    $btnSwitch.lastElementChild.classList.toggle("none");
    d.body.classList.toggle("dark");
    $btnSwitch.classList.toggle("active");
    $menu_dos.classList.toggle("is-active");
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");

    // Guardamos el modo en localstorage.
    if (d.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  // Obtenemos el modo actual.
  if (localStorage.getItem("dark-mode") === "true") {
    d.body.classList.add("dark");
    $btnSwitch.classList.add("active");
    $btnSwitch.firstElementChild.classList.remove("none");
    $btnSwitch.lastElementChild.classList.add("none");
  } else {
    d.body.classList.remove("dark");
    $btnSwitch.classList.remove("active");
    $btnSwitch.firstElementChild.classList.add("none");
    $btnSwitch.lastElementChild.classList.remove("none");
  }
})(document);
