class Inicio extends Phaser.Scene {
    constructor() {
        super("Escena1");
    }

    preload() {
        // Cargar las imágenes de fondo, nave y enemigos
        this.load.image('fondo', '../public/img/sky.jpeg');
        this.load.spritesheet('nave', '../public/img/nave.png', { frameWidth: 70, frameHeight: 62 });
       this.load.image('red','../public/img/red.png')
        this.load.image('enemy', '../public/img/enemy.png');
    }

    create() {
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
    }

    crearEnemyAleatorio() {
        for (let i = 0; i < 8
            ; i++) {
            let enemyDistanciaVertical = Phaser.Math.Between(50, 650);
            let enemy = this.physics.add.sprite(850,enemyDistanciaVertical, 'enemy');
            enemy.checkWorldBounds = true;
            enemy.on('outOfBounds', () => {
                enemy.destroy();
            });
            enemy.body.velocity.x = -200;
        }
    }

    update() {
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
    }
}

export default Inicio;