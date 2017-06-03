import * as _ from 'lodash';

class BuildManager {
    run() {
        this.checkHarvesterFlags();
    }

    checkHarvesterFlags() {
        _.each(Game.rooms, (room) => {
            let sources = room.find(FIND_SOURCES);

        })
    }
}

export default new BuildManager();