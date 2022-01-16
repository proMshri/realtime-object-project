//var img="";
var statuss="";
var outputt=[];
var b=0;
var r=0;
var g=0;
var a=0;

function preload() {
    
}

function setup() {
    canvas=createCanvas(350,400);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
    cocoSsd=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML="Status : object Detecting";
}

function draw() {
    image(Video,0,0,350,400);
   if(statuss==true){
    cocoSsd.detect(Video,loadedModel);
        b=random(255);
        r=random(200);
        g=random(150);
       for(i=0;i<outputt.length;i++){
        document.getElementById("Status").innerHTML="Status : object Detected";
        document.getElementById("HowManyObjects").innerHTML="Number Of Objects : "+outputt.length;
        fill(r,g,b);;
        noFill();
        stroke(r,g,b);
        rect(outputt[i].x,outputt[i].y,outputt[i].width,outputt[i].height);
        fill(r,g,b);
        text(outputt[i].label+" "+Math.floor(outputt[i].confidence*100)+" %",outputt[i].x,outputt[i].y);
       }
   }
}

function modelLoaded() {
    console.log("model has successfully been loaded");
   
    statuss=true;

}

function loadedModel(error,results) {
if(error){
    console.error(error);
}

else{
    console.log(results);
    outputt=results;
}

}