let 方位 = 0
basic.forever(function () {
    方位 = input.compassHeading()
    if (方位 < 359) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (方位 < 337.5) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
    } else if (方位 < 315) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (方位 < 292.5) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else if (方位 < 270) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (方位 < 247.5) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # . .
            `)
    } else if (方位 < 225) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # . .
            `)
    } else if (方位 < 202.5) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (方位 < 180) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (方位 < 157.5) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (方位 < 135) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . . # # #
            `)
    } else if (方位 < 112.5) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . . # # #
            `)
    } else if (方位 < 90) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (方位 < 67.5) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (方位 < 45) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else if (方位 < 22.5) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
