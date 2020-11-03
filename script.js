$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("content");
        }else{
            $('.navbar').removeClass("content");
        }
    })
});