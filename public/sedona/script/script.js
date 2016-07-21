      var title = document.querySelector(".search-hotel .title-block");
      var popup = document.querySelector(".search-hotel .input-block");
      var search = popup.querySelector(".search-btn");
      var inputArrivalDate = popup.querySelector("#arrival-date");
      var inputDepartureDate = popup.querySelector("#departure-date");

      var plusAdults = popup.querySelector(".input-block-adults .plus-btn");
      var minusAdults = popup.querySelector(".input-block-adults .minus-btn");
      var inputAdults = popup.querySelector(".input-block-adults .input-block-text");

      var plusKids = popup.querySelector(".input-block-kids .plus-btn");
      var minusKids = popup.querySelector(".input-block-kids .minus-btn");
      var inputKids = popup.querySelector(".input-block-kids .input-block-text");

      title.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.toggle("search-hotel-invisible");
        inputArrivalDate.focus();
      });

      plusAdults.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputAdults.value) + 1;
        inputAdults.value = value;
      });

      minusAdults.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputAdults.value);
        if (value > 0){
          value = value - 1;
        }
        inputAdults.value = value;
      });

      plusKids.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputKids.value) + 1;
        inputKids.value = value;
      });

      minusKids.addEventListener("click", function(event) {
        event.preventDefault();
        var value = parseInt(inputKids.value);
        if (value > 0){
          value = value - 1;
        }
        inputKids.value = value;
      });

      search.addEventListener("click", function(event) {
        if (!inputArrivalDate.value || !inputDepartureDate.value) {
          event.preventDefault();
          console.log("Нужно ввести даты заезда и выезда.");
          if (!inputArrivalDate.value){
            inputArrivalDate.classList.add("input-block-date-empty");
          }
          if (!inputDepartureDate.value){
            inputDepartureDate.classList.add("input-block-date-empty");
          }
         }
      });

      inputArrivalDate.addEventListener("click", function(event) {
        inputArrivalDate.classList.remove("input-block-date-empty");
      });

      inputDepartureDate.addEventListener("click", function(event) {
        inputDepartureDate.classList.remove("input-block-date-empty");
      });
