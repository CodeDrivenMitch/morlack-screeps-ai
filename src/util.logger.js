import SettingManager from 'manager.setting';

class Logger {
    static debug(message) {
        if(SettingManager.getSetting('util', 'debugEnabled')) {
            console.log("DEBUG: " + message);
        }
    }

    static info(message) {
        console.log("INFO: " + message);
    }

}


export default Logger;