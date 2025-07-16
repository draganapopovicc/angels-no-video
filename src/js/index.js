import "../scss/main.scss";

//Ham menu
if (document.querySelector(".header__menu")) {
   document.querySelector(".header__menu").addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      document.querySelector(".nav").classList.toggle("active");

      if (document.querySelector(".nav").classList.contains("active")) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   });
}

//Header top info
if (document.querySelector(".header__arrow")) {
   document.querySelector(".header__arrow").addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");

      document.querySelector(".header__top--desktop").classList.toggle("active");
   });
}

//Mobile submenu
if (document.querySelector(".nav__list")) {
   document.querySelector(".nav__list").addEventListener("click", (e) => {
      if (window.innerWidth > 1199.5) return;

      const arrow = e.target.closest("li > svg");
      if (!arrow) return;

      arrow.closest("li").classList.toggle("active");
   });
}

//Sticky header
if (document.querySelector(".header")) {
   const header = document.querySelector(".header");
   let headerHeight = header.offsetHeight;

   function handleStickyHeader() {
      if (window.scrollY >= headerHeight) {
         header.classList.add("sticky-header");
      } else {
         header.classList.remove("sticky-header");
      }
   }

   window.addEventListener("resize", () => {
      headerHeight = header.offsetHeight;
   });

   window.addEventListener("load", () => {
      headerHeight = header.offsetHeight;
      handleStickyHeader();
   });

   window.addEventListener("scroll", handleStickyHeader);
}
