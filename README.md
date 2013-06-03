timeFormat
==========

让JavaScript如PHP般格式化时间


使用方法:

util.timeFormat(dateObj, 'pattern')


支持的时间格式:

年：YYYY {2013} YY {13}

月：MM {12}、{02}  M {12}、{2} 

日：DD {20}、{08}  D {20}、{8}

时：hh {11}、{05}  h {11}、{5} 

分：mm {37}、{03}  m {37}、{3}

秒：ss {59}、{06}  s {59}、{6}

毫秒：msss {597}、{006}  ms {597}、{6}


支持的分隔符：

- / 单个空格 : .
- 

由支持的时间格式与分隔符任意组合作为第二个参数pattern

例子：

var time = new Date(1370257374452);

util.timeFormat(time, 'YYYY-MM-DD hh:mm:ss'); //output 2013-06-03 19:02:54

util.timeFormat(time, 'h:m'); //output 19:2

util.timeFormat(time, 'MM.DD YYYY h-m-s:ms'); //output 06.03 2013 19-2-54:452
