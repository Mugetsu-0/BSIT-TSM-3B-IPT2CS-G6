var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "sunicon.jfif";
    }
    else{
        icon.src = "moonicon.jpg";
    }
}

var div = document.getElementById('intro');
var display = 0;

function hideShow()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;

    }
    else{
        div.style.display = 'none';
    display = 1;
}
}