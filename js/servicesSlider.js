const servicesSlider = () => {
  const swiperImg = new Swiper(".services__slider-img", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: false,
    navigation: {
      nextEl: ".nav-btn-next",
      prevEl: ".nav-btn-prev",
    },
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination-pc",
      type: "bullets", // Использовать точки для пагинации
      clickable: true, // Разрешить клик на пагинации для переключения слайдов
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры
      },
    },
  });

  const swiperText = new Swiper(".services__slider-text", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".nav-btn-next",
      prevEl: ".nav-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination-pc",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры пагинации
      },
    },
    allowTouchMove: false,
  });

  // Находим все ссылки с классом "swiper-link"
  const links = document.querySelectorAll(".swiper-link");


  // Добавляем обработчик клика для каждой ссылки
  links.forEach(function (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию

      links.forEach(function (link) {
        link.classList.remove("active");
      });

      const slideId = link.getAttribute("href").slice(1); // Получаем ID слайда из атрибута href ссылки

      link.classList.add("active");
      swiperImg.slideTo(slideId);
      swiperText.slideTo(slideId);
    });
  });


  // Обработчик события "slideChange" для swiperImg
  swiperImg.on("slideChange", function () {
    // Удаляем класс active для всех ссылок
    links.forEach((link) => link.classList.remove("active"));

    // Добавляем класс active для ссылки, соответствующей текущему слайду
    links[swiperImg.realIndex].classList.add("active");
  });

};

servicesSlider();
