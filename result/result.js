window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)
    
    if (urlParams.get('rst') == 1) {
        document.getElementById("rst").innerHTML = "決済成功!"
        var userList = urlParams.get('その他').split(",")
        for (var i = 0; i < userList.length; i++) { 
            var user = document.createElement('li')
            user.textContent = userList[i]
            document.getElementById('user-list').appendChild(user)
        }
                
    } else {
        document.getElementById("rst").innerHTML = "決済失敗"
    }
}
