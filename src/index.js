import Menu from "./escenasNave/Menu.js";
import Inicio from "./escenasNave/Inicio.js";
import Derrota from "./escenasNave/Derrota.js";
import Escena2 from "./escenasNave/Escena2.js";
import Victoria from "./escenasNave/Victoria.js";
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
    scene:[Menu, Inicio, Derrota, Escena2, Victoria]//Vector donde se guardara las escenas, victoria y derrota
    
};
let game = new Phaser.Game(config);

