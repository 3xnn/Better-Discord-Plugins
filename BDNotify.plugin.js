//META{"name":"BDNotify"}*//

class BDNotify {
    // Constructor
    constructor() {
        this.initialized = false;
    }
    
	libraryNames() {
		"kys",
		"hi",
		"bye",
		"xd",
		"sorry",
		"a",
		"b",
		"BetterDiscord",
		"BDNotify"
	};
	
    // Meta
    getName() { return "BDNotify"; }
    getShortName() { return "BDNotify"; }
    getDescription() { return "Notifier for BetterDiscord."; }
    getVersion() { return "1.0.1"; }
    getAuthor() { return "BinnedXena"; }

    // Settings  Panel
    getSettingsPanel() {
        return "<!--Enter Settings Panel Options, just standard HTML-->";
    }
    
    // Load/Unload
    load() { }

    unload() { }

    // Events

    onMessage(libraryNames) {
        // Called when a message is received
		BdApi.alert("BDNotify",["Message recieved."])
    };

    onSwitch() {
        // Called when a server or channel is switched
		BdApi.alert("BDNotify",["Channel was switched."])
    };

    observer(e) {
        // raw MutationObserver event for each mutation
    };
    
    // Start/Stop
    start() {
        var libraryScript = document.getElementById('zeresLibraryScript');
	if (!libraryScript) {
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "zeresLibraryScript");
		document.head.appendChild(libraryScript);
	}

	if (typeof window.ZeresLibrary !== "undefined") this.initialize();
	else libraryScript.addEventListener("load", () => { this.initialize(); });
    }
       
    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }
}