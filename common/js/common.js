// var Serverurl = "https://jstest.laiyunyou.cn";
var Serverurl = "https://js.laiyunyou.cn";
var haslogin = false;
function getGuid32() {
	var rt_str = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	for (i = 0; i < 31; ++i) {
		var num = Math.floor(Math.random() * (26 + 26 + 10));
		var ch_str;
		if (num < 10) {
			ch_str = num.toString();
		} else if (num < 10 + 26) {
			ch_str = String.fromCharCode(65 + num - 10);
		} else {
			ch_str = String.fromCharCode(97 + num - 10 - 26);
		}
		rt_str += ch_str;
	}
	return rt_str;
}

