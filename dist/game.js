/**
 * This class is an examble of imported class
 */
class ImportedClassExample {

  /**
   * Say's hello in the console
   */
  hello () {
    console.log('hello');
  }

}

class Game {

  /**
   * @param {HTMLElement} el
   * @param {string} assetsBasePath
   */
  constructor (el, assetsBasePath) {
    // Initialize your game

    // Call code form imported js modules
    let myImportedClass = new ImportedClassExample();
    myImportedClass.hello();
  }

  /**
   * @param {string} command
   * @return {string} command output
   */
  executeGameCommand (command) {
    // Execute the command in your game and return the result
  }

}

export { Game };
