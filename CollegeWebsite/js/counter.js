 $(document).ready(function(){
    $('.counterNum').each(function(){
        $(this).prop('counterBoxIcon',0).animate({
            Counter: $(this).text()
        },{
            duration: 4500,
            easing: 'linear',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});