/**
 * @name BDNotify
 * @author BinnedXena
 * @description BetterDiscord Notifier
 * @version 1.0.3
 * @invite https://discord.gg/RyYECKyWMF
 * @authorLink https://twitter.com/Autoimi
 */

module.exports = class ExamplePlugin {
    load() {
		
	} // Optional function. Called when the plugin is loaded in to memory

    onSwitch() {
        BdApi.alert("BDNotify",["Switched Channel"])	
    }
	
    start() {
		BdApi.alert("BDNotify",["Started BDNotify 1.0.3"])
	} // Required function. Called when the plugin is activated (including after reloads)
    stop() {
		BdApi.alert("BDNotify",["Stopped BDNotify. Thank you for using!"])
	} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>

}