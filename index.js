class Button {
    level = 1;
    levelHtml =  document.getElementById("buttonLevel");
    buttonHtml =  document.getElementById("button");
}

class Game {
    // binds this instance so this refers to class instance
    // instead of the global scope
    constructor() {
        this.buttonClick = this.buttonClick.bind(this)
    }
    button = new Button();
    clickCounter = 0;
    clickCounterHtml = document.getElementById("counter");
    buttonClick() {
        this.clickCounter += this.button.level  
        this.clickCounterHtml.textContent = this.clickCounter
    }
}

function main() {
    g = new Game()
    g.button.buttonHtml.addEventListener("click", g.buttonClick)
}

main()