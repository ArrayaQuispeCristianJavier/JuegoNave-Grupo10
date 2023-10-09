class Derrota extends Phaser.Scene {
    constructor() {

        super('Derrota');
    }
    preload(){
        this.load.image('FondoDerrota', '../public/img/FondoDerrota.jpg')    
        this.load.image('GameOver', '../public/img/game_over_PNG42.png')
        
    }

    create(){
        this.add.image(400,300, 'FondoDerrota') 
        this.add.image(400,300,'GameOver')
        
     

    }
}
 export default Derrota;
