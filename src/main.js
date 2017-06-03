// Vanilla extensions

// Roles
require('./role.harvester');
require('./role.upgrader');
require('./creep');

import Logger from './util.logger'
import SpawnManager from './manager.spawn';
import SettingManager from './manager.setting';
import BuildManager from './manager.build';

console.log("Initializing");
BuildManager.run();

module.exports.loop = function() {
    Logger.debug("Loop!");
    SettingManager.beforeLoop();
    SpawnManager.run();
    
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        creep.runRole();
    }
};
