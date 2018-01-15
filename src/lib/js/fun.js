import 'fetch-polyfill';

const fun = {
	// 请求
	ask: function (_url, _params, callabck) {
		fetch(_url, {
			headers: {
				'Accept': 'application/json',
                'Content-Type': 'application/json'
			},
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			credentials: 'include', //请求带coolie
			body: JSON.stringify(_params)
		}).then(res => {
			return res.json();
		}).then(data => {
			callback(data)
		}).catch(err =>{
			console.log('catch error')
		})
	},
	//获取url参数
    getQueryStringByName: function(name) {
        var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    },
    cookie: {
        set: function(name, value, days) {
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
            window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
        },
        get: function(name) {
            var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },
        del: function(name) {
            this.set(name, '', -1);
        }
    },
    //加密
    encode: function(text) {
        return encodeURIComponent(text);
    },
    //解密
    decode: function(text) {
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        if (base64regex.test(text) && location.pathname.indexOf('/pay/') == -1) {
            return decodeURIComponent(atob(text));
        } else {
            return decodeURIComponent(text);
        }
    },
}

export default fun