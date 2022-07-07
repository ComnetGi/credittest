window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("rst1").innerHTML = urlParams.get('rst');
}
