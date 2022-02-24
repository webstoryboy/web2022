// ---------- section2 skills ------------
'use strict';

var newJquery = $.noConflict(true);

const newJquerysection2 = newJquery('#section2');

newJquery(function(){
    var skill = newJquery('.skill');
    var chart = newJquery('.chart');
    var chartOST = chart.offset().top - 500;
    var excuted = false;
    console.log(excuted);
    

    newJquery(window).scroll(function(){
        var currentSCT = newJquery(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!skill.hasClass('active')){
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
                                var amount = 970 - (970*now/100);
                                console.log(now);
                                title.text(Math.floor(now));
                                circle.css({strokeDashoffset:amount});
                            }
                    });
                }); //chart each
                skill.addClass('active') = true;
            }
            console.log(excuted);
            
        }
    })
});
// ---------- section2 skills END ------------