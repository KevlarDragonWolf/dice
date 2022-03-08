radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(1, 6))
})
radio.setGroup(1)
basic.forever(function () {
	
})
