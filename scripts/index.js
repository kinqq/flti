function animateScrollTo(_selector, _duration, _adjust) {
    const targetEle = document.querySelector(_selector);
    if (!targetEle) return;

    // - Get current &amp; target positions
    const scrollEle = document.documentElement || window.scrollingElement,
        currentY = scrollEle.scrollTop,
        targetY = targetEle.offsetTop - (_adjust || 0);
    animateScrollTo(currentY, targetY, _duration);

    // - Animate and scroll to target position
    function animateScrollTo(_startY, _endY, _duration) {
        _duration = _duration ? _duration : 600;
        const unitY = (targetY - currentY) / _duration;
        const startTime = new Date().getTime();
        const endTime = new Date().getTime() + _duration + 10;

        const scrollTo = function () {
            let now = new Date().getTime();
            let passed = now - startTime;
            if (now <= endTime) {
                scrollEle.scrollTop = currentY + unitY * passed;
                requestAnimationFrame(scrollTo);
            }
        };
        requestAnimationFrame(scrollTo);
    }
}

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
            questions[i].id = "Checked";
            if (questions[i].querySelectorAll("input")[j].checked) {
                checkedCnt++;
            }
        }
        if (checkedCnt === 0) {
            questions[i].id = "notChecked";
            alert("결과를 보려면 모두 선택해주세요");
            animateScrollTo("#notChecked");
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
