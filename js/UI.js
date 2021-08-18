export class UI {
  UISelectors = {
    board: '[data-board]',
    cells: '[data-cell]',
    counter: '[data-counter]',
    timer: '[data-timer]',
    resetButton: '[data-button-reset]',
    easyButton: '[data-button-easy]',
    normalButton: '[data-button-normal]',
    expertButton: '[data-button-expert]',
    modal: '[data-modal]',
    modalButton: '[data-modal-button]',
    modalHeader: '[data-modal-header]',
  }

  getElement(selector) {
    return document.querySelector(selector)
  }
  getElements(selector) {
    return document.querySelectorAll(selector)
  }

}