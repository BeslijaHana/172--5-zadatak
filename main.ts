input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showString("A")
        basic.clearScreen()
    }
    ig = randint(0, 1)
    if (ig == 0) {
        basic.showIcon(IconNames.No)
    }
    if (ig == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (ig == 1) {
        br += 1
    }
    if (ig == 0) {
        br += -1
    }
    if (br == 0) {
        basic.showString("kraj")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showString("B")
        basic.clearScreen()
    }
    ig = randint(0, 1)
    if (ig == 0) {
        basic.showIcon(IconNames.No)
    }
    if (ig == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (ig == 1) {
        br += 1
    }
    if (ig == 0) {
        br += -1
    }
    if (br == 0) {
        basic.showString("kraj")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(br)
})
input.onGesture(Gesture.LogoDown, function () {
    for (let index = 0; index < 2; index++) {
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.East)
        basic.clearScreen()
    }
})
let ig = 0
let br = 0
br = 0
for (let index = 0; index < 2; index++) {
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
}
