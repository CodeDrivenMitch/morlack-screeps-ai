import MemoryManger from "./manager.memory";
import * as _ from 'lodash';

class SettingManager {
    constructor() {
        this.initializeSettings()
    }

    beforeLoop() {
        this.settings = MemoryManger.getSettings();
    }

    getSetting(type, setting) {
        return this.settings[type][setting];
    }

    initializeSettings() {
        this.settings = MemoryManger.getSettings();
        // Check if settings exist at all
        if (!this.settings) {
            this.settings = {};
        }
        // Create each type, if not available, and add settings
        _.each(this.getPossibleSettings(), (settings, type) => {
            if (!this.settings[type]) {
                this.settings[type] = {};
            }

            // Check if each setting exists and fill it with default
            _.each(settings, (defaultValue, setting) => {
                if (!this.settings[type][setting] && this.settings[type][setting] !== false) {
                    this.settings[type][setting] = defaultValue;
                }
            })
        });

        // Persist
        MemoryManger.setSettings(this.settings);

    }

    getPossibleSettings() {
        return {
            "util": {
                debugEnabled: true
            },
            "spawning": {
                "creep_count": {
                    "harvester": 2
                },
                "role_priority": ["harvester", "upgrader"]
            },

        }
    }

    getBodyCompositionForRole(role) {
        switch(role) {
            case "upgrader":
            case "builder":
            case "harvester":
            default:
                return [WORK, CARRY, MOVE];
        }
    }

    getBodyCompositionPriority() {
        return [TOUGH, WORK, CARRY, ATTACK, HEAL, MOVE]
    }
}

export default new SettingManager();