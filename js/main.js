showCurTime();// 显示当前时间

var rand = Math.random();

if (rand < 0.2) {
	showFireworks();
} else if (rand < 0.4) {
	showBubble();
}else if (rand < 0.6) {
	showRain();
} else if (rand < 0.8) {
	showSnow();
} else {
	// origin
}