function gup(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

function onSubmitClick() {
    window.location.href = "/FLTI";
}

function onShareClick() {
    window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
        "popup",
        "width=600,height=600"
    );
    return false;
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
    resultSpan.innerHTML = "외모주의";
    resultDescSpan.innerHTML =
        "신체적 매력에 강하게 이끌리는 열정적 사랑입니다. <br/> 상대를 겉모습만으로 판단하지 말고 내면의 모습을 보는 것이 중요합니다 :)";
} else if (maxNum == 2) {
    resultSpan.innerHTML = "금사빠";
    resultDescSpan.innerHTML =
        "유희적 사랑으로 한 대상과의 지속적인 관계를 거부합니다. <br/> 사랑이 놀이나 게임이라는 생각을 버리는 것이 좋습니다 :)";
} else if (maxNum == 3) {
    resultSpan.innerHTML = "의심병";
    resultDescSpan.innerHTML =
        "상대를 잘 믿지 못하는 신중한 사랑입니다. <br/> 하지만 시간이 흐르며 점점 사랑이 타오릅니다 :)";
} else if (maxNum == 4) {
    resultSpan.innerHTML = "내스타일만사랑해";
    resultDescSpan.innerHTML =
        "나와 같은 관심사의 연인을 선호하고, 그렇지 않은 경우 다른 상대를 찾습니다. <br/> 나와 다른 관심사를 가지고 있더라도 그것을 존중해주는 태도가 중요합니다 :)";
} else if (maxNum == 5) {
    resultSpan.innerHTML = "질투의 화신";
    resultDescSpan.innerHTML =
        "소유적인 사랑으로 의존성과 강한 질투를 보입니다. <br/> 상대가 자신의 것이라는 생각을 버리는 것이 좋습니다 :)";
} else if (maxNum == 6) {
    resultSpan.innerHTML = "천사";
    resultDescSpan.innerHTML =
        "아무 조건 없이 돌봐주고 베풀어주는 사랑입니다. <br/> 하지만 자신이 호구처럼 연애하고 있는 것은 아닌지 고민해 볼 필요가 있습니다 :)";
}
