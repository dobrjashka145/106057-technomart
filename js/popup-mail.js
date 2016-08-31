  var mail = document.querySelector(".mail-btn")
  var popup = document.querySelector(".modal-mail")
  var close = popup.querySelector(".modal-close")
  var form = popup.querySelector("form")
  var btnSubmit = popup.querySelector(".submit-btn")
  var login = popup.querySelector("[name=user-name]")
  var userMail = popup.querySelector("[name=user-email]")
  var storageLogin = localStorage.getItem("user-name")
  var storageMail = localStorage.getItem("user-email")
  
	  
  mail.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });
	  
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    login.classList.remove("modal-error");
  });
	  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
	   login.classList.remove("modal-error");
     }
    }
  });
	  
  btnSubmit.addEventListener("click", function(event) {
    if (login.classList.contains("modal-error")) {
        login.classList.remove("modal-error");
	}
	if (userMail.classList.contains("modal-error")) {
        userMail.classList.remove("modal-error");
	}
	if (!login.value) {
      event.preventDefault();
      login.classList.add("modal-error");
    } else {
        localStorage.setItem("user-name", login.value);
	}
	if (!userMail.value) {
      event.preventDefault();
      userMail.classList.add("modal-error");
    } else {
        localStorage.setItem("user-email", userMail.value);
    }
  });