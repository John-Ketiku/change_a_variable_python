let Hungriness = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        Hungriness = Hungriness + 1
        basic.showNumber(Hungriness)
    } else if (input.buttonIsPressed(Button.B)) {
        Hungriness = 0
        basic.showNumber(Hungriness)
    }
    
})
