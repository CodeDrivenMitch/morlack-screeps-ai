import * as _ from 'lodash';
import SettingManager from './manager.setting';
import cost from './constants.cost'

class SpawnManager {
    run() {
        _.each(Game.spawns, (spawn) => {this.runSpawn(spawn)});
    }

    /**
     *
     * @param {Spawn} spawn
     * @private
     */
    runSpawn(spawn) {
        let amounts = SettingManager.getSetting("spawning", "creep_count");
        let priority = SettingManager.getSetting("spawning", "role_priority");
        _.each(priority, (role) => {
            let count = _.filter(Game.creeps, (creep) => {
                return creep.room.name === spawn.room.name
                    && creep.memory.role === role;
            }).length;

            if (count < amounts[role]) {
                this.spawnCreep(spawn, role);
            }
        })
    }

    spawnCreep(spawn, role) {
        spawn.createCreep(this.determineCreepBodyParts(spawn, role), `${role}-${_.random(100, 9999)}`, {role: role})
    }

    determineCreepBodyParts(spawn, role) {
        let composition = SettingManager.getBodyCompositionForRole(role);
        let costOfComposition = _.sum(_.map(composition, cost));
        let repeats = Math.floor(spawn.room.energyAvailable / costOfComposition);

        if(repeats < 1) {
            // Cannot spawn 0 repeats
            return;
        }

        let body = [];
        _.times(repeats, () => {body.push(composition)});
        body = _.sortBy(_.flatten(body), (part) => {
            return SettingManager.getBodyCompositionPriority().indexOf(part);
        });

        return body;
    }
}


export default new SpawnManager();