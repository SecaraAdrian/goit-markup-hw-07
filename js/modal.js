(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    const isModalOpen = refs.modal.classList.contains("is-hidden");

    const scrollLockMethod = isModalOpen ? "enableBodyScroll" : "disableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();

$(document).ready(function () {
  $('.modal-open, .js-open-menu').on('click', function () {
    $('body').css('overflow', 'hidden');
  });

  $('.button-open-close, .js-close-menu').on('click', function () {
    $('body').css('overflow', 'auto');
  });
});
