Creep.prototype.runRoleUpgrader = function() {
    if (this.carry.energy < this.carryCapacity) {
        let sources = this.room.find(FIND_SOURCES);
        if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            this.moveTo(sources[0]);
        }
    }
    else {
        if (this.upgradeController(this.room.controller) == ERR_NOT_IN_RANGE) {
            this.moveTo(this.room.controller);
        }
    }
};


