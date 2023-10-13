class Victoria extends Phaser.Scene {
    constructor() {

        super('Victoria');
    }
    preload(){
        this.load.image('FondoVictoria', '../public/img/FondoVictoria.jpg')    
        this.load.image('YouWin', '../public/img/YouWin.png')
        
    }

    create(){
        this.add.image(400,300, 'FondoVictoria') 
        this.add.image(200,550,'YouWin')
        
     

    }
}
 export default Victoria;