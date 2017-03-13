module.exports = {

    storeItem: function (key, value) {
        localStorage.setItem(key, value);
        console.log('Storing item under key: [' + key + '] ', value);
    },

    storeObject: function (key, value) {
        var toStore = JSON.stringify(value);
        localStorage.setItem(key, toStore);
        console.log('Storing object under key: [' + key + '] ', toStore);
    },

    retrieveItem: function (key) {
        return localStorage.getItem(key) || '';
    },

    retrieveObject: function (key) {
        var stored = localStorage.getItem(key);
        var result = JSON.parse(stored) || {};
        console.log('Retrieving object under key: [' + key + '] ', result);
        return result;
    }
};

