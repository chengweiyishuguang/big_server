var basrUrl = 'http://localhost:8000'
var user = {
    login: function(myname, mypassword, callback) {
        $.post(basrUrl + '/admin/login', {
                user_name: myname,
                password: mypassword,
            },
            function(res) {
                // console.log(res);
                callback(res)
            }
        )

    },
    loginOut: function(callback) {
        $.post(basrUrl + '/admin/logout', function(res) {
            // console.log(res);
            callback(res)



        })

    },
    logininfo: function(callback) {
        $.get(basrUrl + '/admin/getuser', function(res) {
            callback(res)

        })
    }
}