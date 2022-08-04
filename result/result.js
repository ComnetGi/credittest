window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('rst') = 1) {
        document.getElementById("rst").innerHTML = "決済成功";
        document.getElementById("userIds").innerHTML = urlParams.get('その他').split(',');
    } else {
        document.getElementById("rst").innerHTML = "決済失敗";
    }

}
