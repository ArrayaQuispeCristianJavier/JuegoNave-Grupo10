import Inicio from "./escenasNave/Inicio.js";

let config = {
    type: Phaser.AUTO,
    width: 800,//ancho
    height: 600,//alto
    physics:
    {
     default:'arcade',
      arcade:
      {
      gravity:{y:0},
      debug:false
      }
    },
    scene:[Inicio]//Vector donde se guardara las escenas, victoria,derrota y escena
};
let game = new Phaser.Game(config);

