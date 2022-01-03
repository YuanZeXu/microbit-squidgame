input.onButtonPressed(Button.A, function () {
    if (isClickBtn == 0) {
        isClickBtn = 1
        lightOption = "A"
        music.setTempo(120)
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        isClickBtn = 0
        lightOption = ""
    }
})
input.onButtonPressed(Button.AB, function () {
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    if (isClickBtn == 0) {
        isClickBtn = 1
        lightOption = "B"
        music.setTempo(90)
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        isClickBtn = 0
        lightOption = ""
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setBuiltInSpeakerEnabled(true)
})
let lightOption = ""
let isClickBtn = 0
isClickBtn = 0
lightOption = ""
basic.forever(function () {
    if (lightOption == "A") {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Triangle)
        basic.showIcon(IconNames.Square)
    } else if (lightOption == "B") {
        basic.showString("1")
        basic.showString("2")
        basic.showString("3")
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showString("A")
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
        basic.showString("B")
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
    }
})
