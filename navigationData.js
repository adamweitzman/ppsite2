let $scrollArea = $(window),
    $containerDesktop = $('.dataShapeContainer');

class DataShape {
    constructor(type, containerElement){
        this.$container = containerElement;
        this._top = Math.floor(math.random(100, 400));
        this._left = Math.floor(math.random(-3500, 400));
        this._width = Math.floor(math.random(5, 60));
        if (type === 1){
            this._speed = 0.09;
            this._height = 1;
        } else if (type === 2){
            this._speed = 0.15;
            this._height = 2;
        } else if (type === 3){
            this._speed = 0.22;
            this._height = 3;
        } else if (type === 4){
            this._speed = 0.48;
            this._height = 4;
        } else if (type === 5){
            this._speed = 0.9;
            this._height = 5;
        } else if (type === 6) {
            this._speed = 1.4;
            this._height = 6;
        } else {
            this._speed = 0.1;
            this._height = 1;
            this._top = Math.floor(math.random(20, 700));
            this._left = Math.floor(math.random(-600, 400));
            this._width = Math.floor(math.random(5, 20));
        }
        this.$shape = $('<div></div>');
        this._oldScroll = 0;
        this.createShape();

    }

    createShape (){
        this.$shape.css({top:this._top + 'px', left:this._left + 'px', width:this._width + 'px', height:this._height + 'px'}).addClass('dataShape');
        this.$container.append(this.$shape);
    }

    addMove (){
        this.$shape.addClass('move');
    }

    move (){
        if ($scrollArea.scrollTop() > this._oldScroll) {
            this._left += ($scrollArea.scrollTop() - this._oldScroll)*this._speed;
            this.$shape.css({left:this._left});
        } else {
            this._left -= (this._oldScroll - $scrollArea.scrollTop())*this._speed;
            this.$shape.css({left:this._left});
        }

        this._oldScroll = $scrollArea.scrollTop();
    }
}

// new DataShape(type)
// 6 - thinnest 1 - thickest

class AllShapesObj {
    constructor () {
        this.shape = new DataShape(6, $containerDesktop);
        this.shape2 = new DataShape(6, $containerDesktop);
        this.shape3 = new DataShape(6, $containerDesktop);
        this.shape4 = new DataShape(5, $containerDesktop);
        this.shape5 = new DataShape(5, $containerDesktop);
        this.shape6 = new DataShape(5, $containerDesktop);
        this.shape7 = new DataShape(5, $containerDesktop);
        this.shape8 = new DataShape(5, $containerDesktop);
        this.shape9 = new DataShape(5, $containerDesktop);
        this.shape10 = new DataShape(5, $containerDesktop);
        this.shape11 = new DataShape(5, $containerDesktop);
        this.shape12 = new DataShape(5, $containerDesktop);
        this.shape13 = new DataShape(4, $containerDesktop);
        this.shape14 = new DataShape(4, $containerDesktop);
        this.shape15 = new DataShape(4, $containerDesktop);
        this.shape16 = new DataShape(4, $containerDesktop);
        this.shape17 = new DataShape(4, $containerDesktop);
        this.shape18 = new DataShape(4, $containerDesktop);
        this.shape19 = new DataShape(4, $containerDesktop);
        this.shape20 = new DataShape(3, $containerDesktop);
        this.shape21 = new DataShape(3, $containerDesktop);
        this.shape22 = new DataShape(3, $containerDesktop);
        this.shape23 = new DataShape(3, $containerDesktop);
        this.shape24 = new DataShape(3, $containerDesktop);
        this.shape25 = new DataShape(3, $containerDesktop);
        this.shape26 = new DataShape(3, $containerDesktop);
        this.shape27 = new DataShape(3, $containerDesktop);
        this.shape28 = new DataShape(2, $containerDesktop);
        this.shape29 = new DataShape(2, $containerDesktop);
        this.shape30 = new DataShape(2, $containerDesktop);
        this.shape31 = new DataShape(2, $containerDesktop);
        this.shape32 = new DataShape(2, $containerDesktop);
        this.shape33 = new DataShape(2, $containerDesktop);
        this.shape34 = new DataShape(2, $containerDesktop);
        this.shape35 = new DataShape(2, $containerDesktop);
        this.shape36 = new DataShape(1, $containerDesktop);
        this.shape37 = new DataShape(1, $containerDesktop);
        this.shape38 = new DataShape(1, $containerDesktop);
        this.shape39 = new DataShape(1, $containerDesktop);
        this.shape40 = new DataShape(1, $containerDesktop);
        this.shape41 = new DataShape(1, $containerDesktop);
        this.shape42 = new DataShape(1, $containerDesktop);
        this.shape43 = new DataShape(1, $containerDesktop);
        this.shape44 = new DataShape(1, $containerDesktop);
        this.shape45 = new DataShape(1, $containerDesktop);
        this.shape46 = new DataShape(1, $containerDesktop);
        this.shape47 = new DataShape(1, $containerDesktop);
        this.shape48 = new DataShape(1, $containerDesktop);
        this.shape49 = new DataShape(1, $containerDesktop);
        this.shape50 = new DataShape(1, $containerDesktop);
        this.shape51 = new DataShape(0, $containerDesktop);
        this.shape52 = new DataShape(0, $containerDesktop);
        this.shape53 = new DataShape(0, $containerDesktop);
        this.shape54 = new DataShape(0, $containerDesktop);
        this.shape55 = new DataShape(0, $containerDesktop);
        this.shape56 = new DataShape(0, $containerDesktop);
        this.shape57 = new DataShape(0, $containerDesktop);
        this.shape58 = new DataShape(0, $containerDesktop);
        this.shape59 = new DataShape(0, $containerDesktop);
        this.shape60 = new DataShape(0, $containerDesktop);
    }
}

let allShapes = new AllShapesObj();

let counter = 1;

for (let prop in allShapes) {
    if ((counter % 3) === 0) {
        allShapes[prop].addMove()
    }
    counter++;
}

$scrollArea.scroll(function(e){

    // updates the nav menu and laser

    let $scrollNavPosition = findNavPosition();
    updateLaserTop($scrollNavPosition);
    updateNavColor($scrollNavPosition);

    // moves the shapes

    for (let prop in allShapes) {
        allShapes[prop].move();
    }




});


