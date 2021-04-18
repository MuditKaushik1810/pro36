class Food {
    constuctor(){
       

        this.img = loadImage("images/Milk.png")
    }
 
   
    display(){
        var x= 80, y= 100;
       
        imageMode(CENTER)
        image(this.image,720,220,70,70)

        if(this.foodStock!=0){
            for(var i = 0;i<this.foodStock;i++){
                if(i%10 ==0){
                    x = 80;
                    y= y+50;
                }
                image(this.image,x,y,50,50)
                x= x+ 30; 
            }
        }
    };

    getFoodStock(){
        foodS = data.val();
    }

    updateFoodStock(){
        if(x<=0){
            x = 0;
          }
            else {
              x = x-1 ;
            }
            database.ref("/").update({
             Food :x 
            })    
    }

    deductFood(){
        foodS = foodS - 1 ;
        database.ref('/').update({
        Food: foodS
  })
    }

    bedroom(){
        background(bedroomImg,550,500);
    }
    
    garden(){
        background(gardenImg,550,500);
    }
    
    washroom(){
        background(washroomImg,550,500);
    }

}