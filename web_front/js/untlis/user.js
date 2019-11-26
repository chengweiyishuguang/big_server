var baseURL = 'http://localhost:8000'
var user = {
    loginIn: function(myName, mypassword, callback) {
        $.post(baseURL + '/admin/login', {
                user_name: myName,
                password: mypassword
            },
            function(res) {
                callback(res)
            })
    },

    loginOut: function(callback) {
        $.post(baseURL + '/admin/logout', function(res) {
            callback(res)
        })
    },
    logininfo: function(callback) {
        $.get(baseURL + '/admin/getuser', function(res) {
            callback(res)
        })
    }
}