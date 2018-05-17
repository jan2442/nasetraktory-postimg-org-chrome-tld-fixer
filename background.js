javascript:(function () {
    var images = document.getElementsByTagName('img');
    for (var i=0; i<images.length; i++){
        var imgSrc =images[i].getAttribute('src');
        if(imgSrc.indexOf('postimg') > 0){
            var imgHrefSrc =  images[i].parentNode.href;
            images[i].setAttribute('src',imgSrc.replace("postimg.org", "postimg.cc"));
            if(imgHrefSrc){
                images[i].parentNode.setAttribute('href',imgHrefSrc.replace("postimg.org", "postimg.cc"));
            }
        }
    }
})();