var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.params.slidesPerView = 4;
swiper.update();

function changeSrc(element) {
  primaryCamElement = document.querySelectorAll("#primary-cam");
  primaryCamElementImg = primaryCamElement[0].children[0].children[1].src;
  primaryCamElementText =
    primaryCamElement[0].children[0].children[0].children[0].innerText;
  primaryCamElementSvg1 =
    primaryCamElement[0].children[0].children[0].children[2].innerHTML;
  primaryCamElementSvg2 =
    primaryCamElement[0].children[0].children[0].children[4].innerHTML;

  //atualizar primary-cam
  primaryCamElement[0].children[0].children[1].src = element.children[1].src;
  primaryCamElement[0].children[0].children[0].children[0].innerText =
    element.children[0].children[0].innerText;
  primaryCamElement[0].children[0].children[0].children[2].innerHTML =
    element.children[0].children[2].innerHTML;
  primaryCamElement[0].children[0].children[0].children[4].innerHTML =
    element.children[0].children[4].innerHTML;

  //atualizar cam target
  element.children[1].src = primaryCamElementImg;
  element.children[0].children[0].innerText = primaryCamElementText;
  element.children[0].children[2].innerHTML = primaryCamElementSvg1;
  element.children[0].children[4].innerHTML = primaryCamElementSvg2;
}

function obtenerAnchoPantalla() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  swiper.height = (windowHeight - 114) / 2;
  swiper.params.slidesPerView = Math.floor((windowWidth - 290) / 280);

  if (windowWidth < 768) {
    swiper.allowTouchMove = true;
  }

  swiper.update();
}

window.addEventListener("resize", function () {
  obtenerAnchoPantalla();
});

obtenerAnchoPantalla();

function stepsSwiper(windowWidth) {
  swiper.params.slidesPerView = Math.floor((windowWidth - 290) / 280);
}

var intervalID = setInterval(myCallback, 7000);

function myCallback() {
  let alerta = listAlertas[Math.floor(Math.random() * 10)];
  if (alerta.gravidade == "Grave") {
    var icon =
      '<i class="fas fa-times-circle status-icon inactive" style="color: red; padding-right: 10px;" ></i>';
  } else {
    var icon =
      '<i class="fa fa-exclamation-triangle" aria-hidden="true" style="color: orange; padding-right: 10px;"></i>';
  }

  let toast = document.querySelector("#toast");
  toast.innerHTML = `
  <div class="toast-header">
    ${icon}
    <strong class="mr-auto">${alerta.infracao}</strong>
    <button type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    <p>Placa do veiculo: <strong>${alerta.placa}</strong></p>
    <p><strong>${alerta.gravidade}</strong></p>
  </div>`;

  $(".toast").toast({
    delay: 2000,
  });
  $(".toast").toast("show");
}

const listAlertas = [
  {
    placa: "NYK7C15",
    infracao: "Excesso de velocidade",
    gravidade: "Grave",
  },
  {
    placa: "MIA3H40",
    infracao: "Iluminação inadequada",
    gravidade: "Leve",
  },
  {
    placa: "GSW5C30",
    infracao: "Lanterna queimada	",
    gravidade: "Média",
  },
  {
    placa: "LAL6J23",
    infracao: "Rodizio",
    gravidade: "Média",
  },
  {
    placa: "QWE8F12",
    infracao: "Iluminação inadequada",
    gravidade: "Leve",
  },
  {
    placa: "HJK5N73",
    infracao: "Dirigir sem cinto de segurança",
    gravidade: "Grave",
  },
  {
    placa: "TYU3E21",
    infracao: "Uso do celular enquanto dirige",
    gravidade: "Media",
  },
  {
    placa: "ASD9F80",
    infracao: "Incumprimento do sinal de stop",
    gravidade: "Leve",
  },
  {
    placa: "GHJ4K56",
    infracao: "Dirigir sem cinto de segurança",
    gravidade: "Grave",
  },
];

function alerta() {
  var alertMenu = document.getElementById("alertMenu");
  var alertListContainer = document.getElementById("alertList");
  var alertArrow = document.querySelector(".alert-arrow"); 

  alertListContainer.innerHTML = '';

  var alerta = listAlertas[1];
  var alertItem = document.createElement("div");
  alertItem.classList.add("alert-item");
  alertItem.innerHTML = "<strong>Placa:</strong> " + alerta.placa + ", <strong>Infracao:</strong> " + alerta.infracao + ", <strong>Gravidade:</strong> " + alerta.gravidade;
  alertListContainer.appendChild(alertItem);

  if (alertMenu.style.display === "block") {
    alertMenu.style.display = "none";
    alertArrow.style.display = "none";
  } else {
    alertMenu.style.display = "block";
    alertArrow.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-bell')) {
    var alertMenus = document.getElementsByClassName("alert-menu");
    for (var i = 0; i < alertMenus.length; i++) {
      var openAlertMenu = alertMenus[i];
      if (openAlertMenu.style.display === "block") {
        openAlertMenu.style.display = "none";

        var alertArrow = document.querySelector(".alert-arrow");
        if (alertArrow.style.display === "block") {
          alertArrow.style.display = "none";
        }
      }
    }
  }
}

