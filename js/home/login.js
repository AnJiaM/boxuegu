define(['jquery'], function ($) {
    //监听表单提交事件,
    $('#login_form').on('submit', function () {
        //发送ajax请求,页面不用刷新
        $.ajax({
            url: '/v6/login',
            type: 'POST',
            data: $(this).serialize(),
            success: function (data) {
                //请求成功跳转到首页
                if (data.code == 200) {
                    location.href = '/';
                }
            },
            //请求失败给出错误提示
            error: function () {
                alert(arguments[2]);
            }
        })
        //阻止表单默认的提交,防止页面刷新跳转
        return false;
    })
})