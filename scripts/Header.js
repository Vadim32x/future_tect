class Header {
    selectors = { //место хранения элементов
        root: "[data-js-header]",
        overlay: "[data-js-header-overlay]",
        burgerButton: "[data-js-header-burger-button]",
    }

    stateClasses = { //класс для управления состоянием
        isActive: "is-active",
        isLock: "is-lock",
    }

    constructor() { //привязка к элементам("сборка деталей")
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    onBurgerButtonClick = () => { //сама логика, что должно произойти
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    bindEvents() { //подключение события
        this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
    }
}

export default Header