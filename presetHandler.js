// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (string, index, newPresetArray) => {
  if (string === 'GET' || string === 'PUT') {
    if (Number.isInteger(index) && index >= 0 && index <= 16) {
      if (string === 'GET') {
        return ([200,presets[index]])
      } else {
        presets[index] = newPresetArray
        return ([200,newPresetArray])
      }
    } else {
      return ([404,''])
    }
  } else {
    return ([400,''])
  };
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
