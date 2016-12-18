import MemoryManger from "./manager.memory";

class SettingManager {
    constructor() {
        this.settings = MemoryManger.getRawMemory().settings;
        this.checkValidityOfSettings()
    }


    getSetting(type, setting) {
        return this.settings[type][setting];
    }

    checkValidityOfSettings() {
        // Check if settings exist at all
        if (!this.settings) {
            this.settings = {};
        }
        // Create each type, if not available, and add settings
        _.each(SettingManager.getPossibleSettings(), (settings, type) => {
            if (!this.settings[type]) {
                this.settings[type] = {};
            }

            // Check if each setting exists and fill it with default
            _.each(settings, (defaultValue, setting) => {
                console.log(type, setting, defaultValue);
                if (!this.settings[type][setting] && this.settings[type][setting] !== false) {
                    this.settings[type][setting] = defaultValue;
                }
            })
        });

    }

    static getPossibleSettings() {
        return {
            "util": {
                debugEnabled: true
            },
            "creep_count": {

            }
        }
    }
}

export default new SettingManager();