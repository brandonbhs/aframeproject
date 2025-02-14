class Coin{
  constructor(x,y,z,model){
    this.model = model;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#coin");
    this.obj.setAttribute("scale",{x:0.1, y:0.1, z:0.1});
    this.obj.setAttribute("position",{x:x,y:y,z:z})
    this.obj.setAttribute("shadow",{receive: true});
	
    scene.append(this.obj);
  }
   

  collect(){
    this.available = true;
    this.obj.setAttribute("position",{x:x,y:22,z:z});
  }   
  
}