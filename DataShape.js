class DataShape {
    constructor(typeOfShape, data, scrollArea, move) {
        this.$container = data.containerEl;
        this.$scrollArea = scrollArea;
        this._top = Math.floor(math.random(data.fromTop, data.toBottom));
        this._left = Math.floor(math.random(data.fromLeft, data.fromRight));
        this._width = Math.floor(math.random(data.fromWidth, data.toWidth));
        if (typeOfShape === 1){
            this._speed = 0.09;
            this._height = data.fromHeight;
        } else if (typeOfShape === 2){
            this._speed = 0.15;
            this._height = data.fromHeight+1;
        } else if (typeOfShape === 3){
            this._speed = 0.22;
            this._height = data.fromHeight+2;
        } else if (typeOfShape === 4){
            this._speed = 0.48;
            this._height = data.fromHeight+3;
        } else if (typeOfShape === 5){
            this._speed = 0.9;
            this._height = data.fromHeight+4;
        } else if (typeOfShape === 6) {
            this._speed = 1.4;
            this._height = data.fromHeight+5;
        } else {
            this._speed = 0.1;
            this._height = data.fromHeight;
            this._top = Math.floor(math.random(20, 700));
            this._left = Math.floor(math.random(-600, 400));
            this._width = Math.floor(math.random(5, 2));
        }
        this.$shape = $('<div></div>');
        this._oldScroll = 0;
        this.count = move;

    }

    createShape (){
        this.$shape.css({top:this._top + 'px', left:this._left + 'px', width:this._width + 'px', height:this._height + 'px'}).addClass('dataShape');
        this.$container.append(this.$shape);

        if (this.count % 3 === 0){
            this.$shape.addClass('move');
        }
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

    removeShape(){
        this.$shape.remove();
    }
}

class SingleShape {
    constructor (type, shapedata, counter){
        this.type = type;
        this.data = shapedata.data;
        this.scrollArea = shapedata.scrollArea;
        this.counter = counter;
        this.shape = new DataShape(this.type, this.data, this.scrollArea, this.counter);
    }

    shapeMove (){
        this.shape.move();
    }

    removeShapes(){
        this.shape.removeShape();
    }
}

class AllShapesCreator {
    constructor(shapeData, counter) {
        this.shapeData = shapeData;
        this.types = shapeData.types;
        this.counter = counter;
        this.allShapeArray = [];
    }

    pushShapeArray(type) {
                let singleShape = new SingleShape(type, this.shapeData, this.counter);
                this.allShapeArray.push(singleShape);
                this.counter++;
        }

    createShapes() {
        for (let i=0; i<= this.allShapeArray.length-1; i++) {
            this.allShapeArray[i].shape.createShape();
        }
    }

    removeAllShapes(){
        for (let i=0; i<= this.allShapeArray.length-1; i++) {
            this.allShapeArray[i].shape.removeShape();
        }
        this.allShapeArray = [];
    }

    initShapes(){
        for (let prop in this.shapeData.types) {
            for (let i = 0; i<= this.shapeData.types[prop][0]; i++){
                this.pushShapeArray(this.shapeData.types[prop][1])
            }
        }
    }

    scrollMove(){
        for (let i=0; i<= this.allShapeArray.length-1; i++) {
            this.allShapeArray[i].shapeMove();
        }
    }
}

let $scrollArea = $(window),
    moveCounter = 1;

let myShapes = {
    types: {
        type0: [14,0],
        type1: [10,1],
        type2: [12,2],
        type3: [9,3],
        type4: [7,4],
        type5: [6,5],
        type6: [5,6],
    },
    data: {
        containerEl: $('.dataShapeContainer'),
        fromTop:100,
        toBottom:400,
        fromLeft: -2500,
        fromRight:400,
        fromWidth: 5,
        toWidth: 60,
        fromHeight:1,
    },
    scrollArea: $scrollArea,
};

let shapes = new AllShapesCreator(myShapes, moveCounter);

// for (let prop in myShapes.types) {
//     for (let i = 0; i<= myShapes.types[prop][0]; i++){
//         shapes.pushShapeArray(myShapes.types[prop][1])
//     }
// }
shapes.initShapes();
shapes.createShapes();

$scrollArea.scroll(function(e){

    // moves the shapes
    shapes.scrollMove();
    if (shapesMobileLanding){
        shapesMobileLanding.scrollMove();
    }

    // updates the nav menu and laser

    let $scrollNavPosition = findNavPosition();
    updateNavColor($scrollNavPosition);
    updateLaserTop($scrollNavPosition);

    // adds shadow to navFlex
    if ($scrollArea.scrollTop() > 100) {
        $navFlex.addClass('navScrollShadow');
    } else {
        $navFlex.removeClass('navScrollShadow');
    }
});


