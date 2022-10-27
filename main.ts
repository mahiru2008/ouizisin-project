let 方位 = 0
basic.forever(function () {
    方位 = input.compassHeading()
    if (方位 < 45) {
        basic.showLeds(`
            . # . # .
            # # . # #
            . # . # .
            . # . # .
            # . . # #
            `)
    } else if (方位 < 135) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . # # # .
            . # # # .
            # . # . #
            `)
    } else if (方位 < 225) {
        basic.showLeds(`
            . # # # .
            . . # . .
            # # # # #
            # # # # #
            # . # . #
            `)
    } else if (方位 < 315) {
        basic.showLeds(`
            # # # # #
            . # . # .
            # # # # #
            # # . # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            # # . # #
            . # . # .
            . # . # .
            # . . # #
            `)
    }
})
