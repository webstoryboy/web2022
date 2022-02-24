// ---------- section2 skills ------------
var newJquery = $.noConflict(true);

newJquery(function(){
    var chart = newJquery('.chart');
    var chartOST = chart.offset().top - 500;
    var excuted = false;
    console.log(excuted);
    

    newJquery(window).scroll(function(){
        var currentSCT = newJquery(this).scrollTop();
        if(currentSCT >= chartOST){
            if(excuted == false){
                chart.each(function(){
                    var item = newJquery(this);
                    var title = item.find('p');
                    var targetNum = title.attr('data-num');
                    var circle = item.find('.circle');
            
                    newJquery({rate:0}).animate({rate:targetNum},
                        {
                            duration: 1500,
                            progress: function(){
                                var now = this.rate;
                                var amount = 626 - (626*now/100);
                                console.log(now);
                                title.text(Math.floor(now));
                                circle.css({strokeDashoffset:amount});
                            }
                    });
                }); //chart each
                excuted = true;
            }
            console.log(excuted);
            
        }
    })
});
// ---------- section2 skills END ------------