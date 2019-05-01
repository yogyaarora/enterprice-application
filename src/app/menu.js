
        function remov(){   
            if(screen.width<768){
                console.log("hello");
                $("#collapseExample").addClass("collapsed").animate({
                    height:"0"
                },"slow",function(){
                    $("#collapseExample").removeClass("show");
                    $("#removedCollapsed").attr("aria-expanded","false");
                    }
                );
            }
           
        }
