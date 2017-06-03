import Logger from "./util.logger";
Creep.prototype.determineStatusHarvester = function () {
    switch (this.getStatus()) {
        case "HARVESTING":
            if (this.isEnergyFull()) {
                this.setStatus("TRANSFERING_SPAWN");
            }
            break;
        case "TRANSFERING_SPAWN":
            if (this.isEnergyEmpty()) {
                this.setStatus("HARVESTING")
            }
            break;

        default:
            this.setStatus("HARVESTING");
            break;
    }
};

Creep.prototype.runHarvest = function () {
    Logger.debug("Harvesting");
    let source = this.pos.findClosestByRange(FIND_SOURCES);
    let result = this.harvest(source);

    if (result !== OK) {
        this.moveTo(source.pos);
    }
};

Creep.prototype.runBuild = function () {
    Logger.debug("Building");
    let site = this.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

    if (this.build(site) !== OK) {
        this.moveTo(site);
    }
};

Creep.prototype.runTransferSpawn = function () {

    Logger.debug("Transfering to spawn");
    let spawn = Game.spawns['Spawn1'];

    // Transfer to spawn if possible
    if (spawn.energy < spawn.energyCapacity) {
        if (this.transfer(spawn, RESOURCE_ENERGY) !== OK) {
            this.moveTo(spawn);
        }
        return;
    }

    // Spawn does not need it, check for extensions
    let extension = this.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType === STRUCTURE_EXTENSION
                && structure.energy < structure.energyCapacity;
        }
    });

    if (!!extension) {
        if (this.transfer(extension, RESOURCE_ENERGY) !== OK) {
            this.moveTo(extension);
        }
        return;
    }

    this.runBuild();
};

