var comment = {
    add: function(name, content, aritcle_id, callback) {
        $.post(APIURLS.comment_add, {
                'name': name,
                'content': content,
                'aritcle_id': aritcle_id,
            },
            function(res) {
                callback(res)
            })
    },
    get: function(article_id, callback) {
        $.get(APIURLS.comment_get, {
                article_id: article_id
            },
            function(res) {
                callback(res)
            }
        )

    }

}