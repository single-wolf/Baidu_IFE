/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
    city = document.getElementById("aqi-city-input"),
    value = document.getElementById("aqi-value-input"),
    table = document.getElementById("aqi-table"),
    alphaReg = /^[\u4e00-\u9fa5aa-zA-z]+$/i,
    numReg = /^-?[0-9]*$/i,
    nullReg = /[(^\s+)(\s+$)]/g;

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city_text = city.value.replace(nullReg, "");
    var value_text = value.value.replace(nullReg, "");
    if (!alphaReg.test(city_text)) {
        alert("城市名必须为中英文字符！");
        return ;
    }
    if (!numReg.test(value_text)) {
        alert("空气质量指数必须为整数！");
        return ;
    }
    aqiData[city.value] = value.value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tableNodes = [];
    for(var data in aqiData) {
        tableNodes.push("<tr>");
        tableNodes.push("<td>" + data +"</td>");
        tableNodes.push("<td>" + aqiData[data] + "</td>");
        tableNodes.push("<td>" + "<button onclick='delBtnHandle(\""+ data + "\")'>删除</button>" +"</td>");
        tableNodes.push("</tr>");
    }
    table.innerHTML = tableNodes.join("");
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(data) {
  // do sth.
  delete aqiData[data];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();