let scene, camera, spikes = [], floors = [], poles = [], coins = []
let r = 0, dr = 1;


window.onload = function(){
  

  scene = document.querySelector("a-scene");
  player = new Player("a-camera");
  player.end = false;
  player.fail = false; 
  
  spikes.push(new Spike(0,5,1));
  floors.push(new Floor(0,5,1));
  poles.push(new Pole(0,5,1));
  coins.push(new Coin(0,5,1));
  
  
   
  setTimeout(loop,1000);
  loop();
}


function loop(){
  
	player.update();
	
  for(let spike of spikes){
	  console.log(distance(spike.obj,player.obj))
	  if(distance(spike.obj,player.obj) < 1.6 ){
		console.log(1);
		player.driver.object3D.position.x = 0;
		player.driver.object3D.position.z = 0;
		player.driver.components["dynamic-body"].syncToPhysics();
	  }
  }
  
  
	  
	  if(player.driver.object3D.position.y < -1 ){
		console.log(1);
		player.driver.object3D.position.x = 0;
		player.driver.object3D.position.y = 10; 
		player.driver.object3D.position.z = 0;
		player.driver.components["dynamic-body"].syncToPhysics();
	  }
	  
  
  for(let pole of poles){
	  if(distance(pole.obj,player.obj) < 1.6 ){
		console.log(1);
		player.driver.object3D.position.x = 0;
		player.driver.object3D.position.y = 3; 
		player.driver.object3D.position.z = 0;
		player.driver.components["dynamic-body"].syncToPhysics();
	  }
  }
  
  
  for(let coin of coins){
	  if distance(coin.obj, player.obj) < 1.6){
		  coin.collect();
	  }
  }
  
  


  setTimeout(loop,10);
} 


 




function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
