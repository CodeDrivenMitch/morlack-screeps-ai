Creep.prototype.runRoleHarvester = function() {
    if (this.carry.energy < this.carryCapacity) {
        let sources = this.room.find(FIND_SOURCES);
        if (this.harvest(sources[0])) {
            this.moveTo(sources[0]);
        }
    }
    else {
        let transferResult = this.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY);
        if (transferResult != OK) {
            this.moveTo(Game.spawns['Spawn1']);
        }
    }
};


