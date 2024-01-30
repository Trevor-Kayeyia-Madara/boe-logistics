var addUser = document.getElementById('addUsers');
var regFrame = document.getElementById('regFrame');
var userList = document.getElementById('userList');
var viewList = document.getElementById('viewList');

addUser.onclick = function(){
    regFrame.style.visibility="visible";
    userList.style.visibility="hidden";
    addUser.style.backgroundColor="#0d4683";
    viewList.style.backgroundColor="#c7943f";
}

viewList.onclick = function(){
    userList.style.visibility="visible";
    regFrame.style.visibility="hidden";
    viewList.style.backgroundColor="#0d4683";
    addUser.style.backgroundColor="#c7943f";
}