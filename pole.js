class Pole{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","red");
    this.obj.setAttribute("position",{x:44,y:0.5,z:0});
	this.obj.setAttribute("scale",{x:0.5,y:0.98,z:0.5});
	this.obj.setAttribute("height", 16);
	this.obj.setAttribute("rotation",{x:-90,y:0,z:0});
    scene.append(this.obj);
  }
}