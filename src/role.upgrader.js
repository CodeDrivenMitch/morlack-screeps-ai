import Logger from "./util.logger";

Creep.prototype.determineStatusUpgrader = function() {

    switch(this.getStatus()) {
        case "HARVESTING":
            if(this.isEnergyFull()) {
                this.setStatus("UPGRADING");
            }
            break;
        case "UPGRADING":
            if(this.isEnergyEmpty()) {
                this.setStatus("HARVESTING")
            }
            break;
        default:
            this.setStatus("HARVESTING");
            break;
    }
};

Creep.prototype.runUpgradeController = function() {
    Logger.debug("Upgrading controller");
    if (this.upgradeController(this.room.controller) !== OK) {
        this.moveTo(this.room.controller.pos);
    }
};


