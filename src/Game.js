import { ImportedClassExample } from './ImportedClassExample'

export class Game {

  /**
   * @param {HTMLElement} el
   * @param {string} assetsBasePath
   */
  constructor (el, assetsBasePath) {
    // Initialize your game

    // Call code form imported js modules
    let myImportedClass = new ImportedClassExample()
    myImportedClass.hello()
  }

  /**
   * @param {string} command
   * @return {string} command output
   */
  executeGameCommand (command) {
    // Execute the command in your game and return the result
  }

}