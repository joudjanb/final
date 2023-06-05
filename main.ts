input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.AB, function () {
    x = 90
    basic.showString("Hello!")
    if (x >= 90) {
        basic.showString("Excellent ")
    } else if (x >= 50) {
        basic.showString("Pass")
    } else if (x <= 50) {
        basic.showString("Fail")
    }
})
input.onButtonPressed(Button.B, function () {
    x += 1
    basic.showNumber(x)
})
let x = 0
basic.showString("Joud")
