class Escena2 extends Phaser.Scene{
     constructor() {
    
            super("Escena2");
    
            this.scoreText = "";
    
            this.score = 250;
    
            this.vidaText="";
    
            this.vida= 100;
    
        }
        preload() {

            // Cargar las imágenes de fondo, nave y enemigos
            this.load.image('fondo','../public/img/Escena2.png');
    
            this.load.spritesheet('nave', '../public/img/nave.png', { frameWidth: 70, frameHeight: 62 });
    
           this.load.image('red','../public/img/red.png');
    
            this.load.image('enemy', '../public/img/enemy.png');
    
            this.load.image('disparoNave','../public/img/shoot.png');
    
            this.load.image('disparoEnemy','../public/img/shootEnemy.png');
    
        }
        create(){

        // Cargar la imagen de fondo

        this.add.image(400, 300, 'fondo');

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

        // Crear enemigos aleatorios
        this.time.addEvent({

            delay: 3000,

            callback: this.crearEnemyAleatorio,

            callbackScope: this,

            repeat: -1

        });

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

        this.enemigo = this.physics.add.group();

        this.physics.add.overlap(this.disparoNave,this.enemigo,this.eliminarEnemigo,null,this);

        //Para controlar el puntaje
        this.scoreText = this.add.text(16, 16, 'Puntaje: 0', { fontSize: '35px', fill: '#EEEEEE' });

        //Para controlar la vida de la nave
        this.vidaText = this.add.text(300,16,'Vida:100',{fontSize:'35px', fill:'#EEEEEE'});
    }


        }
export default Escena2;