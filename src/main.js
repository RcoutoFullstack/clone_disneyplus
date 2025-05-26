document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const abaAlvo = event.currentTarget.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

      if (!aba) return;

      escondeTodasAbas();
      removeBotaoAtivo();

      aba.classList.add('shows__list--is-active');
      event.currentTarget.classList.add('shows__tabs__button--is-active');
    });
  });
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  buttons.forEach(function (button) {
    button.classList.remove('shows__tabs__button--is-active');
  });
}

function escondeTodasAbas() {
  const tabs = document.querySelectorAll('[data-tab-id]');
  tabs.forEach(function (tab) {
    tab.classList.remove('shows__list--is-active');
  });
}