let $burgerContainer = $('.mobileMenuBurger'),
    $burgerTop = $('.burgerTop'),
    $burgerMiddle = $('.burgerMiddle'),
    $burgerBottom = $('.burgerBottom'),
    clickTrigger = 0,
    $navFlex = $('.navFlex'),
    $mobileMenu = $('.mobileNavContainer'),
    mobileRight = $mobileMenu.width(),
    $containerMobile = $('.mobileDataShapeContainer'),
    $containerMobileLanding = $('#home'),
    $logo = $('.logo'),
    $aMobileMenu = $('.mobile a');
    mobileCounter = 1;


if ($(window).width() < 1023) {
    let myShapesMobileLanding = {
        types: {
            type0: [1,0],
            type1: [3,1],
            type2: [1,2],
            type3: [3,3],
            type4: [2,4],
            type5: [1,5],
            type6: [1,6],
        },
        data: {
            containerEl: $containerMobileLanding,
            fromTop:5,
            toBottom:300,
            fromLeft: -70,
            fromRight:350,
            fromWidth: 5,
            toWidth: 40,
            fromHeight:1,
        },
        scrollArea: $(window),
    };
    var shapesMobileLanding = new AllShapesCreator(myShapesMobileLanding, mobileCounter);
    shapesMobileLanding.initShapes();
    shapesMobileLanding.createShapes();
}

$mobileMenu.css({right:mobileRight*1.5 + 'px'});
console.log(`- ${$mobileMenu.width()}`);

let myShapesMobile = {
    types: {
        type0: [1,0],
        type1: [2,1],
        type2: [1,2],
        type3: [2,3],
        type4: [1,4],
        type5: [2,5],
        type6: [3,6],
    },
    data: {
        containerEl: $containerMobile,
        fromTop:0,
        toBottom:$(window).innerHeight(),
        fromLeft: 50,
        fromRight:350,
        fromWidth: 5,
        toWidth: 40,
        fromHeight:1,
    },
    scrollArea: undefined,
};

let shapesMobile = new AllShapesCreator(myShapesMobile, mobileCounter);


// currently closed = 0 // open = 1;

$burgerContainer.click(function() {

    if (clickTrigger === 0) {
        $burgerTop.addClass('burgerTopOpen');
        $burgerMiddle.addClass('burgerMiddleOpen');
        $burgerBottom.addClass('burgerBottomOpen');
        clickTrigger = 1;
        $navFlex.css({background: 'white'});
        $navFlex.removeClass('navScrollShadow');
        // $mobileMenu.addClass('mobileOpen');
        $mobileMenu.css({right:'0'});

        $logo.addClass('logoOpacityNone');

        shapesMobile.initShapes();
        shapesMobile.createShapes();

    } else {
        $burgerTop.removeClass('burgerTopOpen');
        $burgerMiddle.removeClass('burgerMiddleOpen');
        $burgerBottom.removeClass('burgerBottomOpen');
        clickTrigger = 0;
        $navFlex.css({background: '#f3f3f3'});
        $mobileMenu.css({right:mobileRight*1.5 + 'px'});
        $logo.removeClass('logoOpacityNone');

        if ($scrollArea.scrollTop() > 100) {
            $navFlex.addClass('navScrollShadow');
        }


        setTimeout(function(){shapesMobile.removeAllShapes()}, 1000);

    }

});

$aMobileMenu.click(function(){
    $(this).css({color:'#ff5400'});
    $burgerTop.removeClass('burgerTopOpen');
    $burgerMiddle.removeClass('burgerMiddleOpen');
    $burgerBottom.removeClass('burgerBottomOpen');
    clickTrigger = 0;
    $navFlex.css({background: '#f3f3f3'});
    $mobileMenu.css({right:mobileRight*1.5 + 'px'});
    $logo.removeClass('logoOpacityNone');

    setTimeout(function(){
        shapesMobile.removeAllShapes();
        $(this).css({color:'#b2b2c1'});
    }, 1000);
});
