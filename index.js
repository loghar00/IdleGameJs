class Button {
    level = 1;
    levelHtml =  document.getElementById("buttonLevel");
    buttonHtml =  document.getElementById("button");
}

class AutoClicker {
    level = 0;
    // speed is in ms
    clickSpeed = 1000;
}
class Game {
    // binds this instance so this refers to class instance
    // instead of the global scope
    constructor() {
        this.buttonClick = this.buttonClick.bind(this)
        this.autoClick = this.autoClick.bind(this)
    }
    button = new Button();
    autoClicker = new AutoClicker();
    clickCounter = 0;
    clickCounterHtml = document.getElementById("counter");
    buttonClick() {
        this.clickCounter += this.button.level  
        this.clickCounterHtml.textContent = this.clickCounter
    };
    // unsure if async is necessary due to setInterval implementation
    async autoClick() {
        this.clickCounter += this.autoClicker.level
        this.clickCounterHtml.textContent = this.clickCounter
    }
}

function main() {
    g = new Game()
    // runs autoclicker
    setInterval(g.autoClick, g.autoClicker.clickSpeed)
    g.button.buttonHtml.addEventListener("click", g.buttonClick)
}

main()