/*
 * @author Rob Layton
 * @description
 * @example
 * 
 */
angular.module('codeboxsystems.data.LoginService', ['codeboxsystems.mocks.LoginServiceMocks'])

// Factory because no need to create a new instance...
// ...and because the class needs to create a client instance
.factory('LoginService', function(LoginServiceMocks) {
    // If the user is already logged in, set the userId...
    // ...from the session
    var client = new LoginServiceMocks();

    return {
        register: function(username, password, callbacks) {
            try {
                client.register(username, password);

                if (callbacks.onSuccess) {
                    callbacks.onSuccess();
                }
            } catch(err) {
                if (callbacks.onErr) {
                    callbacks.onErr(err);
                }
            }
        },
        login: function(username, password, callbacks) {
            try {
                //client.login(username, CryptoJS.SHA1(password));
                client.login(username, password);

                if (callbacks.onSuccess) {
                    callbacks.onSuccess();
                }
            } catch(err) {
                if (callbacks.onErr) {
                    callbacks.onErr(err);
                }
            }
        },
        changePassword: function(currPass, newPass, confirmPass, callbacks) {
            try {
                client.changePassword(currPass, newPass, confirmPass);
                
                if (callbacks.onSuccess) {
                    callbacks.onSuccess();
                }
            } catch(err) {
                if (callbacks.onErr) {
                    callbacks.onErr(err);
                }
            }
        }
    };
});

