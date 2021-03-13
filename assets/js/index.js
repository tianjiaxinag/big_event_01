$(function () {

    getUserinfo()
});


// 设置一个全局函数
function getUserinfo() {
    // 获取用户信息
    $.ajax({
        type: "get",
        url: '/my/userinfo',
        data: {},
        // 请求头
        headers: {
            Authorization: localStorage.getItem('token')
        },
        success: function (res) {
            console.log(res);

            get(res);
        }
    })
};

// 封装一个渲染函数
function get(res) {
    if (res.status != 0) {
        return layui.layer.msg('信息错误', { icon: 4 });
    }
    // 渲染名称
    console.log(11111, res.data);
    let name = res.data.nickname || res.data.username;
    $('.welcome').html('欢迎' + name);
    // 渲染头像
    let url = res.data.user_pic;
    // console.log(url);
    if (url != null) {
        // 隐藏文字头像
        $('.text-avatar').hide()
        $('.layui-nav-img').attr('url', url)
    } else {
        $('.layui-nav-img').hide();
        $('.text-avatar').html(res.data.username[0].toUpperCase())
    }
}