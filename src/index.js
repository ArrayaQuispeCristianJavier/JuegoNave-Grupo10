import Inicio from "./escenasNave/Inicio.js";
import Escena2 from "./escenasNave/Escena2.js";

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
    scene:[Inicio, Escena2]//Vector donde se guardara las escenas, victoria y derrota
};
let game = new Phaser.Game(config);

