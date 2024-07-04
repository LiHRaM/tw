ScriptAPI.register('TW01', true, 'Hilmar Gústafsson', 'LiHRaM@users.noreply.github.com');
window.TW01 = {};
window.TW01.Library = (function () {})();
window.TW01.Translation = (function () {})();
window.TW01.Main = (function (Library, Translation) {
    const lib = Library;
    const t = Translation;

    const init = function() {
        UI.ErrorMessage("Initializing failed! Boo!");
    };

    return {
        init
    }
})(window.TW01.Library, window.TW01.Translation);

(() => {
    window.TW01.Main.init();
})();