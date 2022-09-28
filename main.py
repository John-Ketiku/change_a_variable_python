Hungriness = 0

def on_forever():
    global Hungriness
    if input.button_is_pressed(Button.A):
        Hungriness = Hungriness + 1
        basic.show_number(Hungriness)
    elif input.button_is_pressed(Button.B):
        Hungriness = 0
        basic.show_number(Hungriness)
basic.forever(on_forever)
