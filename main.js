canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX = 5;
carY = 225;

function add(){
	bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
    car_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bg_imgTag, 0,0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, carX,carY, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (carY >=0){
        carY = carY - 10;
        console.log("When up arrow is pressed, X = " + carX + " Y = " + carY );
        uploadBackground();
        uploadgreencar();
    }
	if((carX<=375)&&(carX>=5)&&(carY<=205)&&(carY>=5)) { 
		console.log("Already Allocated!!!"); 
		document.getElementById("myCanvas").style.borderColor="red"; 
	} 
		else{ 
			document.getElementById("myCanvas").style.borderColor="white"; 
	}

}

function down()
{
	if (carY <=325){
        carY = carY + 10;
        console.log("When down arrow is pressed, X = " + carX + " Y = " + carY );
        uploadBackground();
        uploadgreencar();
    }
	if((carX<=375)&&(carX>=5)&&(carY<=205)&&(carY>=5)) { 
		console.log("Already Allocated!!!"); 
		document.getElementById("myCanvas").style.borderColor="red"; 
	} 
		else{ 
			document.getElementById("myCanvas").style.borderColor="white"; 
	}

	
}

function left(){
	if (carX >=0){
        carX = carX - 10;
        console.log("When left arrow is pressed, X = " + carX + " Y = " + carY );
        uploadBackground();
        uploadgreencar();
		
    }
	if((carX<=375)&&(carX>=5)&&(carY<=205)&&(carY>=5)) { 
		console.log("Already Allocated!!!"); 
		document.getElementById("myCanvas").style.borderColor="red"; 
	} 
		else{ 
			document.getElementById("myCanvas").style.borderColor="white"; 
	}

	
}
	

function right()
{
	if (carX <=700){
        carX = carX + 10;
        console.log("When right arrow is pressed, X = " + carX + " Y = " + carY );
        uploadBackground();
        uploadgreencar();
    }
	if((carX<=375)&&(carX>=5)&&(carY<=205)&&(carY>=5)) { 
		console.log("Already Allocated!!!"); 
		document.getElementById("myCanvas").style.borderColor="red"; 
	} 
		else{ 
			document.getElementById("myCanvas").style.borderColor="white"; 
	}

}


