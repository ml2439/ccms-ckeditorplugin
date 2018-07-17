(function() {

    /**
     * Supports configuration like this:
     *
     * {
     * }
     */

    var CKEDITOR = window.CKEDITOR;

    var pluginName = "ouphello";

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
                    editor.insertHtml("<em>Hello</em>");
                }
            });
        }
    });

})();