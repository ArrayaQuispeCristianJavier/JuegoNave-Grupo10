class Inicio extends Phaser.Scene{
    constructor(){
        super("Escena1");
    }
    preload(){
    /*cargar las imagenes de fondo, nave y nave enemigo, disparoEnemigo, disparo*/
    
    
    //Fondo
    this.load.image('fondo', '../public/img/sky.png');

    //Jugador
    this.load.spritesheet('nave','/public/img/nave.png',{frameWidth:70, frameHeight:62});
    }

    create(){
        /*Cargar imagen de fondo*/
        this.add.image(400,300,'fondo');
        /*Hacer nave en sprite*/
        this.player = this.physics.add.sprite(100,300,'nave');
         /*Con esta linea se esta diciendo que va a utilizar el teclado para mover*/
        this.cursors = this.input.keyboard.createCursorKeys();
        
    
        /*colision del mundo*/
        this.player.setCollideWorldBounds(true);
        this.player.body.allowGravity=false;
        /*Creacion de la animacion de la nave*/

        //Animacion hacia abajo
       this.anims.create({
        key:'abajo',
        frames:[{key:'nave',frame:70}],
        frameRate:20
       })

       //Animacion en reposo
       this.anims.create({
        key:'reposo',
        frames:[{key:'nave',frame:0}],
        frameRate:20
       })

       //Animacion hacia arriba
       this.anims.create({
        key:'arriba',
        frames:[{key:'nave',frame:140}],
        frameRate:20
       })
    }

    update(){
        /*Crear botones para el movimiento de la nave*/
        //tecla hacia arriba
        if (this.cursors.up.isDown) {
         this.nave.setVelocityY(-200);
         this.nave.anims.play('arriba', true)
        }

        //tecla hacia abajo
        else if (this.cursors.down.isDown) {
            this.nave.setVelocityY(200);
            this.nave.anims.play('abajo', true)
        }
        //retroceder
        else if(this.cursors.left.isDown){
            this.nave.setVelocityX(-300);
            //avanzar
        }else if (this.cursors.right.isDown) {
            this.nave.setVelocityX(300);
        }
       
        
    }
}

export default Inicio;
