/**
 * Created by horacio on 4/19/16.
 */

define(["text!../../../menus/inGameMensaje.html!strip", 'ui/popups/popup'], function (DOMdata, PopUp) {

    class InGameMensaje extends PopUp {
        constructor() {
            super(DOMdata);
            this.initCallbacks();
        }

        show(mensaje) {
            super.show();
            $("#inGameMensajeContenido").text(mensaje);
            $("#inGameMensajeBotonOk").focus();
        }

        initCallbacks() {
            var self = this;
            $("#inGameMensajeBotonOk").click(function () {
                self.hide();
            });
        }
    }

    return InGameMensaje;
});