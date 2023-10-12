class Menu extends Phaser.Scene{
    constructor(){
    super("Menu");
    }    
    /*Cargar imagenes de fondo y boton*/ 
    preload(){
    this.load.image('fondoMenu','../public/img/fondoMenu.jpg');
   
    this.load.image('boton','../public/img/botonNave.png');
    }
    create(){
     this.add.image(400,300,'fondoMenu').setScale(2.0);
     this.startButton = this.add.image(475,350,'boton').setInteractive().setScale(0.4);
     
    //Funcion que cambia de pantalla a la escena 1
    this.startButton.on('pointerdown',()=>{
       this.scene.start("Inicio");
    })
   }
   
   }
   export default Menu;