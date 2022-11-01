input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= lista_de_texto.length - 1; index++) {
        basic.showString("" + (lista_de_texto[index]))
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (lista_de_texto[0]))
    basic.pause(100)
    basic.showString("" + (lista_de_texto[1]))
    basic.pause(100)
    basic.showString("" + (lista_de_texto[2]))
})
let lista_de_texto: string[] = []
lista_de_texto = ["pepe", "anna", "juan "]
basic.forever(function () {
	
})
