function reqData(params, callback) {
    var ajaxData = {
        url: 'http://121.42.144.10/cappdev/service/users',
        type: "post",
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        data: params,
        success: function(data) {
            callback.success && callback.success(data);
        },
        error: function(xhr) {
            // callback.error(xhr);
        },
        timeout: 30000,
        crossDomain: true
    };

    $.ajax(ajaxData);
}


var services = {
    login: function(id, pwd, flag, cb) {
        reqData({
            act: "login",
            studentid: id,
            password: pwd,
            flag: flag
        }, cb)
    }
}



services.login("1234567", "123456",{
    success:function(data){
        console.log(data);
    }
})