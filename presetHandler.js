const presets = require('./presets');

const presetHandler = (
    reqType,
    arrayIndex,
    newPresetArray
    ) => {
    if (arrayIndex < 0 || arrayIndex > 3) {
        return [404];
    } else if ((reqType !== 'GET' && reqType !== 'PUT') || arrayIndex === undefined) {
        return [400];
    }

    if (reqType === 'PUT') {
        presets[arrayIndex] = newPresetArray;
    }

    return reqType === 'GET' ? [200, presets[arrayIndex]] : 
        reqType === 'PUT' ? [200, newPresetArray] :
            [400];
};

module.exports = presetHandler;
