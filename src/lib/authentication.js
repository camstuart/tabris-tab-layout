const storage = require('./storage.js');

exports.isAuthenticated = () => {

    let authKey = storage.retrieveItem('auth-jwt');

    if (authKey === '' || authKey === undefined) {
        return false;
    } else {
        return true;
    }
};

exports.signIn = (username, password) => {
    // API Call here, and set token in storgae:
    console.log('Storing API token locally');
    storage.storeItem('auth-jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
};

exports.signOut = () => {
    // API Call here, and set token in storgae:
    console.log('Storing API token locally');
    storage.storeItem('auth-jwt', '');
};
