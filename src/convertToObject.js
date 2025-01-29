'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString.split(';');
  const trimmedProperties = propertiesArray.map((el) => el.trim());
  const keyValuePairs = trimmedProperties.map((property) => {
    const parts = property.split(':');

    return parts.map((part) => part.trim());
  });
  const cleanedProperties = keyValuePairs.map((pair) => pair.join(':'));

  return cleanedProperties.reduce((styleObject, elOfArray) => {
    const [key, value] = elOfArray.split(':');

    styleObject[key] = value;

    return styleObject;
  }, {});
}

module.exports = convertToObject;
