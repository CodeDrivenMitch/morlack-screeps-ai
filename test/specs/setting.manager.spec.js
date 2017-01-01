import {expect} from "chai";
import {describe, it, beforeEach} from "mocha";
import * as sinon from 'sinon';
import SettingManager from '../../src/manager.setting';

describe('Util: Settings', function() {

    // Reset global mocks
    beforeEach(() => {
        global.Memory = require('../mocks/memory');
        global.Game = require('../mocks/game');
    });

    describe('defaults', function() {
        it('should initialize defaults correctly', () => {
            SettingManager.initializeSettings();
            expect(SettingManager.getSetting("util", "debugEnabled")).to.equal(true);
        });

        it('should not override value with a default', () => {
            global.Memory.settings = {
                util: {
                    debugEnabled: false
                }
            };
            SettingManager.initializeSettings();
            expect(SettingManager.getSetting("util", "debugEnabled")).to.equal(false);
        })
    });
});