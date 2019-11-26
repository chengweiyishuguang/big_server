var article = {
    getFiveFocus: function(callback) {
        $.get(APIURLS.article_show, {
                perpage: 5,
                state: '已发布'
            },
            function(res) {

                callback(res)


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
    },
}