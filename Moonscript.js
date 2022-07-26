








window.addEventListener('scroll', function () {
    var value = window.scrollY;
    document.getElementById('stars').style.left = value * 0.25 + "px";
    document.getElementById('moon').style.top = value * 1.05 + "px";
    document.getElementById('mountain_behind').style.top = value * 0.5 + "px";
    document.getElementById('mountains_front').style.top = value*0 + "px";
    document.getElementById('text').style.marginRight = value*4 +"px";
    document.getElementById('text').style.marginTop = value*1.5 +"px";
    document.getElementById('btn').style.marginTop = value*1.5 + "px";
    document.getElementBy('header1').style.top = value*0.5 +"px";




})



