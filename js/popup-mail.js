  var mailOpen = document.querySelector(".mail-btn")
  var mailPopup = document.querySelector(".modal-mail")
  var mailClose = mailPopup.querySelector(".modal-close")
  var mailSubmit = mailPopup.querySelector(".submit-btn")
  var userName = mailPopup.querySelector("[name=user-name]")
  var userMail = mailPopup.querySelector("[name=user-email]")
  var storageLogin = localStorage.getItem("user-name")
  var storageMail = localStorage.getItem("user-email")
  	  
  mailOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mailPopup.classList.add("modal-show");
    userName.focus();
  });
	  
  mailClose.addEventListener("click", function(event) {
    event.preventDefault();
    mailPopup.classList.remove("modal-show");
    userName.classList.remove("modal-error");
	userMail.classList.remove("modal-error");
  });
	  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
     if (mailPopup.classList.contains("modal-show")) {
       mailPopup.classList.remove("modal-show");
	   userName.classList.remove("modal-error");
	   userMail.classList.remove("modal-error");
     }
    }
  });
	  
  mailSubmit.addEventListener("click", function(event) {
    if (userName.classList.contains("modal-error")) {
        userName.classList.remove("modal-error");
	}
	if (userMail.classList.contains("modal-error")) {
        userMail.classList.remove("modal-error");
	}
	if (!userName.value) {
      event.preventDefault();
      userName.classList.add("modal-error");
    } else {
        localStorage.setItem("user-name", userName.value);
	}
	if (!userMail.value) {
      event.preventDefault();
      userMail.classList.add("modal-error");
    } else {
        localStorage.setItem("user-email", userMail.value);
    }
  });