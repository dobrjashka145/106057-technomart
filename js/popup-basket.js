  var inBasket = document.querySelectorAll(".buy-btn")
  var basketPopup = document.querySelector(".modal-basket")
  var basketClose = basketPopup.querySelector(".modal-close")
    	  
  for(var i=0; i<inBasket.length; i++)
  inBasket[i].addEventListener("click", function(event) {
    event.preventDefault();
    basketPopup.classList.add("modal-show-basket");
  });
	  
  basketClose.addEventListener("click", function(event) {
    event.preventDefault();
    basketPopup.classList.remove("modal-show-basket");
  });
	  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
     if (basketPopup.classList.contains("modal-show-basket")) {
       basketPopup.classList.remove("modal-show-basket");
	 }
    }
  });