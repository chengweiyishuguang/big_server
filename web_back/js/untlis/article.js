var article = {
    show: function(curpage, type, state, callback) {
        // alert('测试接口')

        $.get(APIURLS.article_show, {
                page: curpage,
                type: type,
                state: state,
            },
            function(res) {

                callback(res)


            })
    },
    del: function(id, callback) {
        $.get(APIURLS.article_del, { "id": id },

            function(res) {
                callback(res)


            })
    },
    add: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,

            processData: false, //不要让jquery去处理formDate信息
            contentType: false, //不让jquery设置请求头它有自己的请求头

            success: function(res) {
                callback(res)

            }
        })
    },
    //获取文章的详细信息
    getDetial: function(id, callback) {
        // alert('测试接口')

        $.get(APIURLS.article_show, {
                id: id
            },
            function(res) {

                callback(res)


            })
    }

}