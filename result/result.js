window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("rst").innerHTML = urlParams.get('rst');
}
