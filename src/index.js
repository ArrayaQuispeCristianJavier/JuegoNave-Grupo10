import Inicio from "./escenasNave/Inicio.js";

let config = {
    type: Phaser.AUTO,
    width: 1000,//ancho
    height: 660,//alto
    physics:
    {
     default:'arcade',
      arcade:
      {
      gravity:{y:0},
      debug:false
      }
    },
    scene:[Inicio]//Vector donde se guardara las escenas, victoria y derrota
};
let game = new Phaser.Game(config);

