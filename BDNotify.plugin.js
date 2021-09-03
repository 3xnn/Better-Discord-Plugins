/**
* @author BinnedXena
* @name BetterDiscordNotifier
* @version 1.0.6
* @description Notifier for BetterDiscord
* */

module.exports = class BetterDiscordNotifier {
	
	getName() {return "BetterDiscordNotifier";}
    getDescription() {return "Notifier for BetterDiscord";}
    getVersion() {return "1.0.6";}
    getAuthor() {return "BinnedXena";}

    load() {
	    BdApi.showToast("BDNotify was loaded.")	
    }
	
    start() {
        BdApi.showToast("BDNotify has started.")
	}

    onChannel() {
	    BdApi.showToast("Channel was switched.")	
    }
    
	stop() {
        BdApi.showToast("BDNotify has been stopped.")
	}
	
}