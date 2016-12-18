import Logger from 'util.logger';

Creep.prototype.runRole = function() {
    Logger.debug("Running creep " + this.name);
    switch(this.memory.role) {
        case "harvester":
            this.runRoleHarvester();
            break;
        case "upgrader":
            this.runRoleUpgrader();
            break;
        default:
            console.log("Role " + this.memory.role + " is not defined!");
    }
};