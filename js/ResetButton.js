import {
  UI
} from './UI.js'


export class ResetButton extends UI {
  element = this.getElement(this.UISelectors.resetButton)

  changeEmotion(emotion) {
    this.element.quarySelector('use').setAttribute('href', `./assets/sprite.svg#${emotion}`)
  }
}