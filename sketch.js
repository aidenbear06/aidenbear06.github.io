function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	
	fill(0, 255, 100);
	arc(200,200,300,300,1.5*PI,((hour()%12)/6*PI-HALF_PI+0.0001));
	
	fill(100,0,255);
	arc(200,200,225,225,1.5*PI,(minute()/30*PI-HALF_PI+0.0001));
	
	fill(255,100,0);
	arc(200,200,150,150,1.5*PI,(second()/30*PI-HALF_PI+0.0001));

	if (second() === 0){
		console.log(minute());
	}
}
