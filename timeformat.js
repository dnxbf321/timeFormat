var util = function(){
    var parseDate = function (date) {
  		var YYYY = date.getFullYear(),
  			YY = ('' + YYYY).substr(2),
  			M = date.getMonth() + 1,
  			MM = ('0' + M).slice(-2),
  			D = date.getDate(),
  			DD = ('0' + D).slice(-2),
  			h = date.getHours(),
  			hh = ('0' + h).slice(-2),
  			m = date.getMinutes(),
  			mm = ('0' + m).slice(-2),
  			s = date.getSeconds(),
  			ss = ('0' + s).slice(-2),
  			ms = date.getMilliseconds(),
  			msss = ('00' + ms).slice(-3);
		return {
			YYYY: YYYY,
			YY: YY,
			M: M,
			MM: MM,
			D: D,
			DD: DD,
			h: h,
			hh: hh,
			m: m,
			mm: mm,
			s: s,
			ss: ss,
			ms: ms,
			msss: msss
		}
	};
  	//date为时间对象, pattern为时间格式定义(例如：YYYY-MM-DD hh:mm:ss.msss)
	var timeFormat = function (date, pattern) {
		/**
		 * step 1: 切割pattern 分隔符只能是 - / 单个空格 : .
		 * step 2: 执行替换
		 * step 3: 拼接结果，返回
		 */
		var result = '';
		var dateObj = parseDate(date);
		var splitArr = pattern.match(/(\w+((?=[\-\/ \:\.])|$))|([\-\/ \:\.]+)/g);
		var acceptReg = /YYYY|YY|M|MM|D|DD|h|hh|m|mm|s|ss|ms|msss/i;
		for (var i = 0, len = splitArr.length, item = ''; i < len; i++) {
			item = splitArr[i];
			if (acceptReg.test(item)) {
				item = dateObj[item];
			}
			result += item;
		}
		return result;
	};
	return {
		timeFormat: timeFormat
	}
}();
