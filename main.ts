sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    nepriatel = sprites.create(img`
        . . . . 5 5 4 4 1 1 4 4 5 5 . . 
        . . . . 5 4 2 2 2 2 2 2 4 5 . . 
        . . . . 2 1 2 2 2 2 2 2 1 2 . . 
        . . . 4 2 1 9 2 2 2 2 9 1 2 4 . 
        . . . f 2 2 9 2 2 2 2 9 1 2 f . 
        . . . f 2 2 9 2 2 2 2 9 2 2 f . 
        . . . f 2 2 9 2 2 2 2 9 2 2 f . 
        . . . f 2 1 2 9 9 9 9 2 1 2 f . 
        . . . 4 2 1 2 1 1 1 1 2 1 2 4 . 
        . . . 4 2 4 1 5 5 5 5 1 4 2 4 . 
        . . . 4 2 4 5 5 5 5 5 5 4 2 4 . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . f 4 2 4 4 4 4 4 4 2 4 f . 
        . . . f 4 2 2 4 4 4 4 2 2 4 f . 
        . . . f f 4 4 4 4 4 4 4 4 f f . 
        . . . . f f . . . . . . f f . . 
        `, SpriteKind.Player)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rychlost = 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.x = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    coins.setPosition(randint(50, 100), randint(10, 120))
})
let cesta_pravo: Sprite = null
let cesta_lavo: Sprite = null
let nepriatel: Sprite = null
let rychlost = 0
let coins: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 5 5 4 4 a a 4 4 5 5 . . 
    . . . . 5 4 7 7 7 7 7 7 4 5 . . 
    . . . . 7 a 7 7 7 7 7 7 a 7 . . 
    . . . 4 7 a 9 7 7 7 7 9 a 7 4 . 
    . . . f 7 7 9 7 7 7 7 9 a 7 f . 
    . . . f 7 7 9 7 7 7 7 9 7 7 f . 
    . . . f 7 7 9 7 7 7 7 9 7 7 f . 
    . . . f 7 a 7 9 9 9 9 7 a 7 f . 
    . . . 4 7 a 7 a a a a 7 a 7 4 . 
    . . . 4 7 4 a 8 8 8 8 a 4 7 4 . 
    . . . 4 7 4 8 8 8 8 8 8 4 7 4 . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . f 4 2 4 4 4 4 4 4 2 4 f . 
    . . . f 4 2 2 4 4 4 4 2 2 4 f . 
    . . . f f 4 4 4 4 4 4 4 4 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
coins = sprites.create(assets.image`coin`, SpriteKind.Food)
controller.moveSprite(mySprite)
rychlost = 0
info.setLife(3)
game.onUpdateInterval(100, function () {
    cesta_lavo = sprites.createProjectileFromSide(img`
        777777777777777777777777777777777777777777776667777777cccccccccccccccccccffccfcf
        776666666767777766766677777777776766677777777767767767caccccccccccaaccccfcccffcc
        777777776767666777677766776666667777766666667777767767cccaaaccaaaacccaacccfcfccc
        677777777777676667676676777777766776677777776666766767caccccacccccccccacfccffccf
        767666667767677767667676776667776776777777677777776777ccccccaccaaccaccacfcffcfcc
        767777776767677777766777666766776777777667667776666777cccaccaccacccacaacfcfccfcc
        767666676767676667776777677776776777766777766767777777ccaaccacaacccacaccccfcffcf
        767777776767677766677766776676776767776666777777777667ccaccaaccccaaccaacfcccfcfc
        766677767777677777667777777777776776667777666666667766ccaacccccaaaccccacfccfccfc
        777777777777777777777777777777777777767777777777777777ccccccccccccccccccffccccff
        `, 0, 80)
    cesta_pravo = sprites.createProjectileFromSide(img`
        cccccccccccccccccccccccccccccccc777777777777777777777777777777777777777777777777
        fcfffcfcccaaccacaaccaaaaacccccac777667766677777776677777666677766777776766666677
        ffcccfcfcccaacaccaacccccaaccacac767777677776676767677667777666767776677777777777
        cfcfcfccfcccaccaccccaccacacaccac766677667666776767776677767777767766777666666677
        ccffccccfccaccccaccacccacccacacc777667767677777767766777767777777667767677777677
        fcfcccfccccccaaccccacacaaccacccc776777767667667767667777777667766777777677767767
        ffccffccfcccaccaacccacccacccacac776777777767766677677667777677677776777776676677
        ccfcfcfcfcaaccaaccaccacccaccacac777667777767777777777766776677677776666667777667
        ffcfcccfccacacacccacccaccaacccac777766667777776666667777777777667777777777777767
        cccccccccccccccccccccccccccccccc777777777777777777777777777777777777777777777777
        `, 0, 80)
    cesta_pravo.right = 200
})
