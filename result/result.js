window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("rst").innerHTML = urlParams.get('rst');
    document.getElementById("その他").innerHTML = urlParams.get('その他');
}
