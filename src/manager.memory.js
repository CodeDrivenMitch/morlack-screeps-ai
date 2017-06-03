export default class MemoryManager {
    /**
     * @returns {Object}
     */
    static getSettings() {
        return !!Memory.settings ? Memory.settings : {};
    }

    static setSettings(settings) {
        Memory.settings = settings;
    }
}