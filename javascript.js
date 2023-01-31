const navButton = document.getElementsByClassName('navButton');
const navDrop = document.getElementsByClassName('navDrop');

function dropDown() {
    for (i = 0; i < navButton.length; i++)
    {
        let e = navButton[i];
        e.addEventListener('mouseenter', function(){
            console.log(e.parentNode.childNodes);
            e.parentNode.childNodes[3].style.visibility = 'visible';
            e.parentNode.childNodes[3].style.height = "auto";
        })
        e.addEventListener('mouseleave', function(){
            e.parentNode.childNodes[3].style.height = "0px";
            e.parentNode.childNodes[3].style.visibility = 'hidden';
        })
    }
}


dropDown();