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
        alert('测试数据')
        $.get(baseURL + 'admin/category_search', function(res) {
            callback(res)

        })
    }
}