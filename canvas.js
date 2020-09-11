// can = document.getElementById("mycanvas");
// var ctx = can.getContext("2d");
// ctx.strokeRect(100,100,200,400);
// ctx.fillStyle= "rgb(200,0,0)";
// ctx.fillRect(200,300, 150,150);

const BOARDLENGTH = 8;
class Board {
    constructor(size) {
        this.colors = {
            playable: "rgb(30,24,56)",
            unplayable : "rgb(75,43,88)",
            wpiece :"rgba(210,210,210,.9",
            rking : "rgba(255,50,50,.95",

        }
        this.size = size;
        this.aspect = .3333333;
        
        
        this.boardsize = this.size * BOARDLENGTH;
        this.can = document.createElement("canvas")
        this.can.width = this.boardsize;
        this.can.height = this.boardsize;
        var tmp = document.getElementById("canholder");
        tmp.appendChild(this.can)
        this.ctx = this.can.getContext("2d");
        this.ctx.strokeStyle = 'rgb(250,250,50)';
        this.ctx.lineWidth=8
        this.ctx.strokeRect(0,0, this.boardsize,this.boardsize);
        for (var y = 0; y < 8; y++) {
            for (var x = 0; x < 8; x++) {
                if (x%2 == y%2) {
                    this.drawsquare(x,y, this.colors.unplayable)
                }
                else {
                    this.drawsquare(x,y, this.colors.playable)
                }
            }
        }
    
    }
    drawsquare(x,y,color) {
        this.ctx.save()
        this.ctx.fillStyle=color;
        this.ctx.translate(x*this.size,y*this.size)
        this.ctx.fillRect(0,0,this.size,this.size);
        // this.ctx.beginPath()
        // this.ctx.fillStyle="rgb(255,255,255)"
        
        // this.ctx.arc(this.size/2,this.size/2,1,0,Math.PI*2)
        // this.ctx.fill()
        this.ctx.restore()
    }
    drawpiece(x,y,color) {
        this.ctx.save()
        this.ctx.fillStyle=color;
        this.ctx.translate(x*this.size,y*this.size)
        this.draw_actual_piece()
        this.ctx.restore()
    }
    draw_actual_piece() {
        this.ctx.save()
    
        this.ctx.translate(0, this.size*this.aspect*1.3)
        this.ctx.scale(1,this.aspect)
        
        this.ctx.beginPath();
        this.ctx.arc(this.size/2,this.size/2,this.size/3 ,0,Math.PI*2)
        this.ctx.fill();
        this.ctx.restore()

    }
    drawking(x,y,color) {
        this.ctx.save()
        this.ctx.fillStyle=color
        this.ctx.translate(x*this.size,y*this.size) // pick square
        this.draw_actual_piece()
        this.ctx.translate(0,-this.size/6)
        this.draw_actual_piece()
        
        this.ctx.restore()
    }
}
  
window.addEventListener("load", function() {
    sqsize = 20;
    board = new Board(sqsize);
    board.drawpiece(7,6,board.colors.wpiece)
    board.drawking(5,6,board.colors.rking)
    
})