/*
 *		url参数转换工具
	* 		传入url字符串: 返回其参数
	* 		传入对象: 转化为url参数字符串
	* 	格式: {
							baseUrl,
							data
						}
 */
;(function(){
	if(!window.bTools){
		window.bTools = {};
	}
	window.bTools.parseUrlParam = function(data){
		let ret;
		if(typeof(data) == 'string'){ //字符串转对象
			let dataArr = data.split('?')[1].split('&');
			let paramObj = {};
			dataArr.forEach((item, index) => {
				if(item){
					paramObj[item.split('=')[0]] = item.split('=')[1];
				}
			});
			ret = paramObj;
		}else if(typeof(data) == 'object'){ //对象转字符串
			let dataStr = '';
			Object.keys(data).forEach((key, index) => {
				dataStr += key + '=' + data[key] + '&';
			});
			ret = dataStr;
		}else{
			ret = '传入的url格式有误';
		}
		return ret;
	};
})()