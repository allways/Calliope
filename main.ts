let zeit = 300
basic.showNumber(5)
basic.pause(zeit)
basic.showNumber(4)
basic.pause(zeit)
basic.showNumber(3)
basic.pause(zeit)
basic.showNumber(2)
basic.pause(zeit)
basic.showNumber(1)
basic.pause(zeit)
basic.showNumber(0)
music.playMelody("F F F F F F F F ", 120)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    # # # # #
    `)
basic.pause(zeit)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(zeit)
basic.showLeds(`
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    . . . . .
    `)
basic.pause(zeit)
basic.showIcon(IconNames.Heart)
basic.pause(zeit)
basic.showString("Maimai")
basic.pause(zeit)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
for (let index = 0; index < 2; index++) {
    music.playMelody("F E F A F C F B ", 120)
    music.playMelody("F G A G A F G A ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
}
basic.pause(zeit)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
