class Escena2 extends Phaser.Scene{
    constructor(){
    
            super("Escena2");
    
            this.scoreText = "";
    
            
    
            this.vidaText="";
    
          

            this.vidaJefeText = "";
            this.vidaJefe = 100;
            this.vida= 100;
    }
    preload() {

    // Cargar las imágenes de fondo, nave y enemigos
    this.load.image('fondo2','../public/img/Escena2.jpg');
    
    this.load.spritesheet('nave', '../public/img/nave.png', { frameWidth: 70, frameHeight: 62 });
    
    this.load.image('red','../public/img/red.png');
    
    this.load.image('enemigoJefe', '../public/img/Jefe.png');
    
    this.load.image('disparoNave','../public/img/shoot.png');
    
    this.load.image('disparoEnemy','../public/img/shootEnemy.png');
    
    }
    create(){

        
        // Cargar la imagen de fondo

        this.add.image(400, 300, 'fondo2');

        // Agregar partículas que sigan a la nave

        let particles= this.add.particles(-10,0,'red',{
            speed:100,

            angle: {min:150, max:210},

            scale: {start:1, end:0},

            blendMode: 'ADD'

        });

        // Hacer nave un sprite
        this.nave = this.physics.add.sprite(100, 300, 'nave');

        this.cursors = this.input.keyboard.createCursorKeys();

        // Hace que las partículas sigan a la nave
        particles.startFollow(this.nave);

        /*Creacion del jefe*/
        this.enemigoJefe = this.physics.add.sprite(900,300,'enemigoJefe');
        this.enemigoJefe.body.allowGravity = false

        


        // Colisión con el mundo para la nave

        this.nave.setCollideWorldBounds(true);

        //Desactivar la gravedad
        this.nave.body.allowGravity = false;

        // Crear animaciones de la nave
        this.anims.create({

            key: 'abajo',
            frames: this.anims.generateFrameNumbers('nave', { start: 1, end: 1 }),

            frameRate: 20

        });
        this.anims.create({

            key: 'reposo',

            frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 0 }),

            frameRate: 20

        });
        this.anims.create({
            key: 'arriba',

            frames: this.anims.generateFrameNumbers('nave', { start: 2, end: 2 }),

            frameRate: 20
        });

        //Grupo de disparos
        this.disparoNave = this.physics.add.group();
        
        //grupo de disparo de nave enemigo
        this.disparoEnemy = this.physics.add.group();

      
        //Colision entre los disparos del jefe a nuestra nave
        this.physics.add.overlap(this.nave,this.disparoEnemy,this.danioNave,null,this);
        //Colision entre nuestro disparo hacia la nave del jefe
        this.physics.add.overlap(this.enemigoJefe,this.disparoNave,this.danioJefe,null,this);
      
        this.disparosDelJefe();
                
       
        //Para controlar el puntaje
        this.vidaJefeText = this.add.text(16, 16, 'Vida del jefe:100', { fontSize: '35px', fill: '#EEEEEE' });

        //Para controlar la vida de la nave
        this.vidaText = this.add.text(16,50,'Vida:100',{fontSize:'35px', fill:'#EEEEEE'});
    this.reload = true;
    }
    disparosDelJefe(){
        this.time.addEvent({
            delay: 800,
            callback: this.realizarDisparoJefe,
            callbackScope:this,
            loop:true
        });
    }
    realizarDisparoJefe(){
        
        let aleatorios = Math.floor(10*Phaser.Math.FloatBetween(0.1,0.3));
     switch (aleatorios) {
        case 1:
            // Nivel de dificultad 1
            for (let i = 0; i < 5; i++) {
                let disparoJefe = this.disparoEnemy.create(this.enemigoJefe.x, this.enemigoJefe.y, 'disparoEnemy');
                disparoJefe.setVelocityX(-200);
            }
            break;
        case 2:
            // Nivel de dificultad 2
            for (let i = 0; i < 5; i++) {
                let disparoJefe = this.disparoEnemy.create(this.enemigoJefe.x, this.enemigoJefe.y, 'disparoEnemy');
                disparoJefe.setVelocityX(-200);
                disparoJefe.setVelocityY(Phaser.Math.Between(-100, 100));
            }
            break;
        case 3:
            // Nivel de dificultad 3
            for (let i = 0; i < 5; i++) {
                let disparoJefe = this.disparoEnemy.create(this.enemigoJefe.x, this.enemigoJefe.y, 'disparoEnemy');
                disparoJefe.setVelocityX(-200);
                disparoJefe.setVelocityY(Phaser.Math.Between(-100, 100));
            }
            break;
     }
      
    }
    update(){
        /*-------Controles de la nave--------*/
        // Lógica de movimiento de la nave
        if (this.cursors.up.isDown) {

            this.nave.setVelocityY(-250);

            this.nave.anims.play('arriba', true);

        } else if (this.cursors.down.isDown) {
            
            this.nave.setVelocityY(250);
            
            this.nave.anims.play('abajo', true);

        } else if (this.cursors.left.isDown) {
           
            this.nave.setVelocityX(-300);

        } else if (this.cursors.right.isDown) {
            
            this.nave.setVelocityX(300);

        } else {

            this.nave.setVelocityX(0);
            
            this.nave.setVelocityY(0);
            
            this.nave.anims.play('reposo', true);
        
        }
       //Si se presiona la tecla ESPACIO se va a ejecutar la funcion disparar()
       if(this.cursors.space.isDown && this.reload) {

        this.Disparo();
        
 
       }
      
      if (this.vidaJefe==0) {
        this.scene.start('Victoria');
        console.log("Juego Terminado");
      }
      if(this.vida <= 0){
        this.scene.start('Derrota');
        console.log("Se cambio a la escena derrota");
        }

      }

    Disparo(){
        this.recarga();
        //grupo de objeto de disparo declarado en la linea 73 que sigue las coordenadas X Y de la nave y va a salir con la imagen
        let disparo = this.disparoNave.create(this.nave.x, this.nave.y, 'disparoNave');
        disparo.setVelocityX(2000);
        }

    danioJefe(jefe,disparoJefe){
     
    this.vidaJefe -=20;
     this.vidaJefeText.setText('Vida del jefe: ' + this.vidaJefe );
     disparoJefe.destroy();
     if (this.vidaJefe == 0) {
        
        this.enemigoJefe.destroy();
        //Agregar la escena de victoria
     }
    
    }
    /*Cuando el jefe nos da un disparo ejecuta esta accion*/
    danioNave(nave,disparoJefe){
        this.vida -=60;
        this.vidaText.setText('Vida: ' + this.vida);
        disparoJefe.destroy();
        
    }
    recarga(){
        this.reload = false;
        if (!this.addreload) {
        this.time.addEvent({
            delay: 700,
            callback: () => {
                this.reload = true;
            },
            callbackScope: this,
            repeat:-1
        })
        }
    }
}
export default Escena2;