function checkOnlyOne(element) {
    const checkboxes = document
        .querySelector("." + element.name)
        .querySelectorAll("input");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    });
    element.checked = true;
}

function onSubmitClick() {
    var questions = document.querySelectorAll("div[class*='q']");
    var checkedCnt = 0;
    var isAllChecked = false;
    var res = "";
    for (var i = 0; i < questions.length; i++) {
        for (
            var j = 0;
            j < questions[i].querySelectorAll("input").length;
            j++
        ) {
            if (questions[i].querySelectorAll("input")[j].checked) {
                checkedCnt++;
            }
        }
        if (checkedCnt === 0) {
            alert("결과를 보려면 모두 선택해주세요");
            isAllChecked = false;
            break;
        } else {
            checkedCnt = 0;
            isAllChecked = true;
        }
    }
    if (isAllChecked) {
        var input = document.querySelectorAll("input");
        for (var i = 0; i < input.length; i++) {
            if (input[i].checked) {
                res += String(input[i].value);
            }
        }
        window.location.href = "result.html?res=" + res;
    }
}

function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
}