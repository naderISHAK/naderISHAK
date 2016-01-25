$(document).ready(function(){
    $(".carousel").carousel({
        interval:4000
    });
    
    $("#page1").click(function(){
       $("#myCarousel").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $(".dropdown").hover(function(){
        $(".dropdown-menu").slideDown("slow");
    },function(){
        $(".dropdown-menu").slideUp("slow");
    });
    
    $("#sub-list1").click(function(){
       $("#TheAnswer").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#sub-list2").click(function(){
       $("#vision").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#sub-list3").click(function(){
        $("#mission").animatedScroll({duration:2000,easing:"easeInOutExpo"});
    });
    
    $("#page3").click(function(){
       $("#services").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#page4").click(function(){
       $("#founders").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#page5").click(function(){
       $("#niche").animatedScroll({duration:2000,easing:"easeInOutExpo"});
    });
    
    $("#page6").click(function(){
       $("#reach").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#page7").click(function(){
       $("#footer").animatedScroll({duration:2000,easing:"easeInOutExpo"}); 
    });
    
    $("#navlist").lavalamp({duration:500,
    easing:"easeInOutExpo",setOnClick:true
    });
    
    $('.img-holder').imageScroll({
        image: null,
        imageAttribute: 'image',
        container: $('.third-block'),
        speed: 0.2,
        coverRatio: 0.90,
        holderMinHeight: 200,
        extraHeight: 80,
        parallax: true,
        touch: false
    });
    
    $('#myTab a[href="#pmo"]').click(function(){
        $("#img-pmi, #img-out").fadeOut(300,function(){
            $("#img-pmo").delay(400).fadeIn("slow");
        });
    });
    $('#myTab a[href="#out"]').click(function(){
        $("#img-pmo, #img-pmi").fadeOut(300,function(){
            $("#img-out").delay(400).fadeIn("slow");
        });
    });
    $('#myTab a[href="#pmi"]').click(function(){
        $("#img-out, #img-pmo").fadeOut(300,function(){
            $("#img-pmi").delay(400).fadeIn("slow");
        });
    });
    
    $("#readMore").click(function(){
        $("#hidden").animate({height:"toggle"},500);
    });
    
    Morris.Donut({
        element: "donut",
        data: [
                {label: "Telco & IT", value: 29},
                {label: "Finance", value: 24},
                {label: "Oil & Other", value: 13},
                {label: "Public", value: 11},
                {label: "Education & NGO", value: 24}
            ],
        colors: ["red"],
        formatter: function(y,data){return y+"%"}
    });
    
    Morris.Bar({
        element: "bar",
        data: [
            { y: 'Telco & IT', a: 29},
            { y: 'Finance', a: 24},
            { y: 'Public', a: 11},
            { y: 'Oil & Other', a: 13},
            { y: 'Education', a: 24}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Percentage'],
        barColors: ["red"],
        hoverCallback: function (index, options, content, row) {
  return row.y + " sector having " + row.a +"%";
}
    });
    
   $("#submit").click(function(e){
        if(($("#FN").val()=="") || ($("#LN").val()=="") || ($("#email").val()=="") || ($("#message").val()=="")){
            
            e.stopPropagation();

        }
        else{
            
            $.post("contact.php");
            
        }
    });
    
});