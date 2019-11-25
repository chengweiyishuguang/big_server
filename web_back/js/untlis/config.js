var baseURL = 'http://localhost:8000'
var APIURLS = {
    user_loginIn: baseURL + '/admin/login',
    user_loginOut: baseURL + '/admin/logout',
    user_logininfo: baseURL + '/admin/getuser',

    category_show: baseURL + '/admin/category_search',
    category_del: baseURL + '/admin/category_delete',
    category_add: baseURL + '/admin/category_add',
    category_edit: baseURL + '/admin/category_edit',



    article_show: baseURL + '/admin/search',
    article_del: baseURL + '/admin/article_delete',
    article_add: baseURL + '/admin/article_publish',
    article_edit: baseURL + '/admin/category_edit',



}