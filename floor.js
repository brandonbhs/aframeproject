class Floor{
  constructor(x,y,z){
    this.obj = document.createElement("a-plane");
    this.obj.setAttribute("color","purple");
    this.obj.setAttribute("position",{x:0,y:-2,z:0});
	this.obj.setAttribute("height", 1000);
	this.obj.setAttribute("width", 1000);
	this.obj.setAttribute("rotation",{x:-90,y:0,z:0});
	this.obj.setAttribute("static-body", true);
    scene.append(this.obj);
  }
}