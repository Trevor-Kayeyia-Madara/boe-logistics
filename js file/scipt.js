var addUser = document.getElementById('addUsers');
var regFrame = document.getElementById('regFrame');
var userList = document.getElementById('userList');
var viewList = document.getElementById('viewList');
var dashboard = document.getElementById('dashboard');
var visibleColor = "#0d4683";
var hiddenColor = "#c7943f";


addUser.onclick = function(){
    regFrame.style.visibility="visible";
    userList.style.visibility="hidden";
    addUser.style.backgroundColor=visibleColor;
    viewList.style.backgroundColor=hiddenColor;
    dashboard.style.backgroundColor=hiddenColor;
}


viewList.onclick = function(){
    userList.style.visibility="visible";
    regFrame.style.visibility="hidden";
    viewList.style.backgroundColor=visibleColor;
    addUser.style.backgroundColor=hiddenColor;
    dashboard.style.backgroundColor=hiddenColor;
}

dashboard.onclick = function(){
    userList.style.visibility="hidden";
    regFrame.style.visibility="hidden";
    viewList.style.backgroundColor=hiddenColor;
    addUser.style.backgroundColor=hiddenColor;
    dashboard.style.backgroundColor=visibleColor;
}