class Spike{
  constructor(x,y,z){
    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("color","blue");
    this.obj.setAttribute("position",{x:12,y:0.5,z:0.1});
	this.obj.setAttribute("scale",{x:0.2,y:1,z:0.2});
    scene.append(this.obj);
  }
}