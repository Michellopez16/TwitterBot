

void setup(){
 size(640,360);
 background(255);
 for (int i=0;i<500;i++){
  float x = random(width);
  float y = random(height);
  float r = random(100,255);
  float g = random(100,255);
  float b = random(100,255);
  float sz = random(5,35);
  noStroke();
  fill(r,g,b,100);
  ellipse(x,y,sz,sz);
}
save("output.png");
exit();
}