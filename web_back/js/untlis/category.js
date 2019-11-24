//文章类型管理
// var b_URL = 'http://localhost:8000'
// var category = {
//     show: function(callback) {
//         $.get(b_URL + 'admin/category_search', function(res) {
//             callback(res)

//         })

//         // alert('测试数据')

//     }
// }
var baseURL = 'http://localhost:8000'

var category = {
    show: function(callback) {

        $.get(APIURLS.category_show, function(res) {
            callback(res)
        })
    },
    del: function(id, callback) {
        $.post(APIURLS.category_del, { id: id }, function(res) {
            callback(res)
        })
    },
    add: function(name, slug, callback) {
        $.post(APIURLS.category_add, { 'name': name, 'slug': slug },

            function(res) {
                callback(res)

            })
    },
    edit: function(id, name, slug, callback) {
        $.post(APIURLS.category_edit, { 'id': id, 'name': name, 'slug': slug },
            function(res) {
                callback(res)
            })

    }
}