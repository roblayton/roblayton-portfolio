/*
 * @author Rob Layton
 */
angular.module('codeboxsystems.mocks.LoginServiceMocks', [])

.factory('LoginServiceMocks', function() {
    var LoginServiceMocks = function() {
        var users = [{
            id: '1',
            username: 'admin',
            password: 'admin'
        }];
        var currUser = users[0];

        var isUserExists = function(username) {
            for (var i = 0, len = users.length; i < len; i++) {
                if(users[i].username === username) {
                    return users[i];
                }
            }

            return false;
        };

        this.register = function(username, password) {
            var user = isUserExists(username);
            if (!user) {
                var newUser = {
                    id: '9',
                    username: username,
                    password: password
                };
                users.push(newUser);
            } else {
                throw new Error("User already exists");
            }
        };
        
        this.login = function(username, password){
            var user = isUserExists(username);
            if (user) {
                if (password == user.password) {
                    console.log('Login successful.');
                    currUser = user;
                    return {
                        id: currUser.id
                    };
                }
                else {
                    throw new Error('Either username or password is incorrect.');
                }
            } else {
                throw new Error("User doesn't exist");
            }
        };

        this.changePassword = function(currPass, newPass, confirmPass) {
            if (currPass == currUser.password) {
                if (newPass == confirmPass) {
                    currUser.password = newPass;
                }
                else {
                    throw new Error('New password does not match confirmation.');
                }
            }
            else {
                throw new Error('Current password is incorrect.');
            }
        };

    };

    return LoginServiceMocks;
});
