//META{"name":"BDNotify"}*//

class BDNotify {
	
	getName() {return "BDNotify";}
    getDescription() {return "Notifier for BetterDiscord, Simple.";}
    getVersion() {return "1.0.5";}
    getAuthor() {return "BinnedXena";}

    load() {
	    BdApi.alert("Loaded Plugin",["BDNotify has loaded. This plugin uses no Library."])	
    }
	
    start() {
        BdApi.alert("BDNotify",["Launched BDNotify"])
	}

    onChannel() {
	    BdApi.alert("BDNotify",["Switched Channel"])	
    }
    stop() {
        BdApi.alert("BDNotify",["Launched BDNotify"])
	}
	
}