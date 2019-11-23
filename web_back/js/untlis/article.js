var article = {
    show: function(callback) {
        // alert('测试接口')
        $.get(APIURLS.article_show, function(res) {
            callback(res)


        })
    },
    del: function(id, callback) {
        $.get(APIURLS.article_del, { "id": id },

            function(res) {
                callback(res)


            })
    }

}