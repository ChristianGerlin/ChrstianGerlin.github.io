if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i))) {
    document.write('<link href="/mobile.css"  rel="stylesheet">');
} else {
    document.write('<link href="/index.css"  rel="stylesheet">');
    document.write('<link href="/nav2.css" rel="stylesheet">');
}

function panel(){
    window.location.href = "/panel/index.html";
}

function blogschreiben(){
    window.location.href = "/panel/blog.html";
}


function isIndex(){
    document.getElementById('index.html').classList.add('active');
}

document.onscroll = function() {
        if (window.innerHeight + window.scrollY > document.body.clientHeight) {
            document.getElementById('scrollable').style.display='none';
        }

        if (window.innerHeight + window.scrollY < document.body.clientHeight) {
            document.getElementById('scrollable').style.display='inherit';
        }
    }
