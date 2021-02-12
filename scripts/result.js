function gup(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

String.prototype.count = function (c) {
    var result = 0,
        i = 0;
    for (i; i < this.length; i++) if (this[i] == c) result++;
    return result;
};
var val = gup("res", window.location.href);
max = 0;
maxNum = -1;
for (var i = 1; i <= 6; i++) {
    if (val.count(String(i)) > max) {
        max = val.count(String(i));
        maxNum = i;
    }
}

resultSpan = document.getElementById("result");
resultDescSpan = document.getElementById("resultDesc");

if (maxNum == 1) {
    resultSpan.innerHTML = "외모주의형";
    resultDescSpan.innerHTML =
        "당신은 애인과 함께 할 때 외모를 중요하게 보는 스타일입니다. 사람을 겉모습을 판단하지 말라는 말이 있습니다 :) ";
} else if (maxNum == 2) {
    resultSpan.innerHTML = "금사빠";
    resultDescSpan.innerHTML = "";
} else if (maxNum == 3) {
    resultSpan.innerHTML = "신중한 사랑 유형";
    resultDescSpan.innerHTML = "";
} else if (maxNum == 4) {
    resultSpan.innerHTML = "자신과 같은 관심사의 연인을 좋아함";
    resultDescSpan.innerHTML = "";
} else if (maxNum == 5) {
    resultSpan.innerHTML = "질투의 화신";
    resultDescSpan.innerHTML = "";
} else if (maxNum == 6) {
    resultSpan.innerHTML = "천사";
    resultDescSpan.innerHTML = "";
}
