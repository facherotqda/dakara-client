/**
 * Created by horacio on 5/3/16.
 */

define(['enums', 'lib/pixi'], function (Enums, PIXI) {

    var Macros = Class.extend({
        init: function (game, intervalos, acciones) {
            this.game = game;
            this.intervalos = intervalos;
            this.acciones = acciones;

            this.trabajando = false;
            this.lanzandoHechizo = false;
        },

        comenzarTrabajar: function () {
            if (this.trabajando)
                return;
            this.game.escribirMsgConsola(Enums.MensajeConsola.MACRO_TRABAJO_ACTIVADO, Enums.Font.WARNING);

            PIXI.ticker.shared.add(this._updateTrabajar, this);
            this.trabajando = true;
        },

        _updateTrabajar: function () { // TODO: que no checkee cada vez ? funcion on timer...
            if (!this.intervalos.requestMacroTrabajo(this.game.currentTime))
                return;
            if (this.game.trabajoPendiente) {
                this.acciones.click();
            } else {
                this.acciones.usarConU();
            }
        },

        comenzarLanzarHechizo: function () {
            if (this.lanzandoHechizo)
                return;
            this.game.escribirMsgConsola(Enums.MensajeConsola.MACRO_HECHIZOS_ACTIVADO, Enums.Font.WARNING);
            log.error("comenzando lanznado hechizo");
            this.lanzandoHechizo = true;
        }

    });
    return Macros;
});
