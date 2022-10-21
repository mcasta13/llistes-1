input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= lista_de_texto.length - 1; index++) {
        basic.showString("" + (lista_de_texto[index]))
        basic.pause(100)
    }
})
let lista_de_texto: string[] = []
lista_de_texto = ["pepe", "anna", "juan "]
basic.forever(function () {
	
})
