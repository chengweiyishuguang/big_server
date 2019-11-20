var basrUrl = 'http://localhost:8000'
var user = {
    login: function(myname, mypassword) {
        $.post(basrUrl + '/admin/login', {
                user_name: myname,
                password: mypassword,
            },
            function(res) {
                // console.log(res);
                if (res.code === 200) {
                    location.href = 'index.html'

                } else {
                    $('#msgInfo').text('不能为空')
                    $('#myModal').modal('show')
                }
            }
        )

    },
    loginOut: function() {
        $.post(basrUrl + '/admin/logout', function(res) {
            // console.log(res);
            if (res.code === 200) {
                window.location.href = 'login.html'
            }


        })

    },
    logininfo: function() {
        $.get(basrUrl + '/admin/getuser', function(res) {
            // console.log(res);
            if (res.code === 200) {
                $("#userImg").prop('src', res.data.user_pic);
                $("#userName").text(res.data.nickname);
            }

            // var myname=$("#userImg").val


        })
    }
}