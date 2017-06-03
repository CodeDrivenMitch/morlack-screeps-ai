import Logger from './util.logger';

Creep.prototype.runRole = function() {
    Logger.debug("Running creep " + this.name);
    switch(this.memory.role) {
        case "harvester":
            this.determineStatusHarvester();
            break;
        case "upgrader":
            this.determineStatusUpgrader();
            break;
        default:
            console.log("Role " + this.memory.role + " is not defined!");
    }



    switch (this.getStatus()) {
        case "HARVESTING":
            this.runHarvest();
            break;
        case "TRANSFERING_SPAWN":
            this.runTransferSpawn();
            break;
        case "UPGRADING":
            this.runUpgradeController();
            break;
    }
};

Creep.prototype.getStatus = function() {
    return this.memory.status;
};

Creep.prototype.setStatus = function(status) {
    this.memory.status = status;
};

Creep.prototype.isEnergyFull = function() {
    return this.carry.energy === this.carryCapacity
};

Creep.prototype.isEnergyEmpty = function() {
    return this.carry.energy === 0
};