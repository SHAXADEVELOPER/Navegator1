document.getElementById("send").addEventListener("click", function () {
  console.log("Ishladimi?");

  let name, email, message, name2, tuy,manzil;
  let admin = ["1909954469"];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetForm = () => {
    document.querySelector(".form_sent").style.visibility = "visible";
    document.getElementById("name").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("manzil").value = "";
    document.getElementById("tuy").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    name = " ";
    name2 = " ";
    manzil = " ";
    tuy = " ";
    email = " ";
    message = " ";

    setTimeout(() => {
      document.querySelector(".form_sent").style.visibility = "hidden";
    }, 2000);
  };

  const sendTelegramMessage = (name, name2, manzil, tuy, email, message, id) => {
    let txt =
      "*Имя пользователя: *" +
      name +
      "*%0AFamilya: *" +
      name2 +
      "*%0AYashash joyi: *" +
      manzil +
      "*%0ATo'y kuni: *" +
      tuy +
      "*%0AЭлектронная почта: *" +
      email +
      "*%0AСообщение: *" +
      message;

    var xmlHttp = new XMLHttpRequest();
    let theUrl =
      "https://api.telegram.org/bot6785777633:AAEIVAlCoaTwRj1Es-G1wcqJtrayAXF_-v4/sendMessage?chat_id=" +
      id +
      "&parse_mode=markdown&text=" +
      txt;
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).ok;

    // console.log(familya)

  };

  const nameInput = document.getElementById("name");
  const name2Input = document.getElementById("name2");
  const manzilInput = document.getElementById("manzil");
  const tuyInput = document.getElementById("tuy");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name_error");
  const name2Error = document.getElementById("name2_error");
  const manzilError = document.getElementById("manzil_error");
  const tuyError = document.getElementById("tuy_error");
  const emailError = document.getElementById("email_error");
  const messageError = document.getElementById("message_error");

  // console.log(familyaInput)

  let hasError = false;

  if (nameInput.value.trim() === "") {
    nameError.style.visibility = "visible";
    hasError = true;
  } else {
    nameError.style.visibility = "hidden";
    name = nameInput.value.trim();
  }

  if (name2Input.value.trim() === "") {
    name2Error.style.visibility = "visible";
    hasError = true;
  } else {
    name2Error.style.visibility = "hidden";
    name2 = name2Input.value.trim();
  }

  if (manzilInput.value.trim() === "") {
    manzilError.style.visibility = "visible";
    hasError = true;
  } else {
    manzilError.style.visibility = "hidden";
    manzil = manzilInput.value.trim();
  }

  if (tuyInput.value.trim() === "") {
    tuyError.style.visibility = "visible";
    hasError = true;
  } else {
    tuyError.style.visibility = "hidden";
    tuy = tuyInput.value.trim();
  }



  if (
    emailInput.value.trim() === "" ||
    !validateEmail(emailInput.value.trim())
  ) {
    emailError.style.visibility = "visible";
    hasError = true;
  } else {
    emailError.style.visibility = "hidden";
    email = emailInput.value.trim();
  }

  if (messageInput.value.trim() === "") {
    messageError.style.visibility = "visible";
    hasError = true;
  } else {
    messageError.style.visibility = "hidden";
    message = messageInput.value.trim();
  }

  if (hasError) {
    return;
  }

  let send = false;
  for (let i = 0; i < admin.length; i++) {
    let id = admin[i];
    if (sendTelegramMessage(name, name2, manzil, tuy, email, message, id)) {
      send = true;
    } else {
      send = false;
      break;
    }
  }

  if (send) {
    resetForm();
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});













// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     autoplay: {
//       delay: 5500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   });


//   var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });