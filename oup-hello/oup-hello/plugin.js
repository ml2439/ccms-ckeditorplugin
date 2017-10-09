(function() {

    /**
     * Supports configuration like this:
     *
     * {
     *     "enableLink": true,
     *     "enableAltText": true,
     *     "imagePickerType": "",
     *     "imagePickerConfig": {},
     *     "linkPickerType": "",
     *     "linkPickerConfig": {},
     *
     *     "imageClass": "",
     *     "linkClass": ""
     * }
     */

    var Ratchet = window.Ratchet;

    var OneTeam = window._OT;
    var CKEDITOR = window.CKEDITOR;

    var pluginName = "oup-hello";

    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {

            // button
            editor.ui.addButton(pluginName, {
                label: 'Hello',
                command: pluginName
            });

            editor.addCommand(pluginName, {
                exec: function (editor) {
                    editor.insertHtml(html);
                }
            });
        }
    });

})();