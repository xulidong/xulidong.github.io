function tick() {
	var hours, minutes, seconds, txtNow, txtDo;
	var intHours, intMinutes, intSeconds;
	var today;
	today = new Date();
	intHours = today.getHours();
	intMinutes = today.getMinutes();
	intSeconds = today.getSeconds();
	if (intHours === 0) {
		hours = "12:";
		txtNow = "现在是午夜";
		txtDo = "，该休息了。"
	} else if (intHours < 12) {
		hours = intHours + ":";
		txtNow = "现在是上午";
		txtDo = "，新的一天开始了。";
	} else if (intHours === 12) {
		hours = "12:";
		txtNow = "现在是正午";
		txtDo = "，该午休了。";
	} else {
		intHours = intHours - 12;
		hours = intHours + ":";
		txtNow = "现在是下午";
		txtDo = "，抓紧时间吧。";
	}

	if (intMinutes < 10) {
		minutes = "0" + intMinutes + ":";
	} else {
		minutes = intMinutes + ":";
	}
	if (intSeconds < 10) {
		seconds = "0" + intSeconds;
	} else {
		seconds = intSeconds + "";
	}
	document.getElementById('clock').innerHTML = "<div>" + txtNow + "<b>" + hours + minutes + seconds + "</b>" + txtDo + "</div>";
	window.setTimeout("tick();", 500);
}

window.onload = tick;