var baseURL = 'http://localhost:8000'
var APIURLS = {
    user_loginIn: baseURL + '/admin/login',
    user_loginOut: baseURL + '/admin/logout',
    user_logininfo: baseURL + '/admin/getuser',

    category_show: baseURL + '/admin/category_search',
    category_del: baseURL + '/admin/category_delete',
    article_show: baseURL + '/admin/search',
    article_del: baseURL + '/admin/article_delete',
    article_add: baseURL + '/admin/article_publish'


}