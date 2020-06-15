function mMenu(){
    document.getElementById('m_box').className += " active";
}

function Close(){
    document.getElementById('m_box').className = document.getElementById('m_box').className.replace(" active", "");
}

function showSub(){
    document.getElementById('subMenu').className += " on";
}

function hideSub(){
    document.getElementById('subMenu').className = document.getElementById('subMenu').className.replace(" on", "");
}
