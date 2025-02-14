class Spider{
  constructor(x,y,z,model){
    this.model = model;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#spider");
    this.obj.setAttribute("scale",{x:1, y:1, z:1});
    this.obj.setAttribute("position",{x:x,y:y,z:z})
    this.obj.setAttribute("shadow",{receive: true});
    scene.append(this.obj);
  }
      
  
}