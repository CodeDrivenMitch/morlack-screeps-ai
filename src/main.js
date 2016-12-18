// Vanilla extensions

// Roles
require('./role.harvester');
require('./role.upgrader');
require('./creep');

import Logger from 'util.logger'
import SettingManager from 'manager.setting'

module.exports.loop = function() {
    Logger.debug("Loop!");
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        creep.runRole();
    }
};
