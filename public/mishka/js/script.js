    var nojsList = document.querySelectorAll(".no-js");
    var openMenu = document.querySelector(".top-nav__logo-hamburger");
    var navItemList = document.querySelectorAll(".top-nav__item:not(:nth-child(1))");
    var iconMenu = openMenu.querySelector(".top-nav__icon-hamburger");

    for (var i = 0; i < nojsList.length; i++) {
      nojsList[i].classList.remove("no-js");
    }

   openMenu.addEventListener("click", function(event) {
      event.preventDefault();
      for (var i = 0; i < navItemList.length; i++) {
        navItemList[i].classList.toggle("top-nav__item--hidden");
      }
      iconMenu.classList.toggle("active");
    });

    //----------------------------------------------------------------------------------------------//
    //Интерактивная карта
    YMaps.jQuery(function () {
      // Создает экземпляр карты и привязывает его к созданному контейнеру
      var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

      // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
      map.setCenter(new YMaps.GeoPoint(30.3211, 59.9363), 16);

      var s = new YMaps.Style();
      s.iconStyle = new YMaps.IconStyle();
      s.iconStyle.href = "../img/icon-map-pin.svg";
      s.iconStyle.size = new YMaps.Point(66, 100);
      s.iconStyle.offset = new YMaps.Point(-15, -90);
      var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.3211, 59.9363), {style: s});
      placemark.name = "Mishka";
      placemark.description = "";
      map.addOverlay(placemark);
    })
