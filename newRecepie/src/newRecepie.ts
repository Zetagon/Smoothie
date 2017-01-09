/// <reference path="../../lib/keyword"/>
window.onload =  activateKeyWordText();

class Recepie
{
	name:string ="";
	ingredients:Array<[string,string]> = [];
	instructions:string = "";
	tags:Array<string> [];
	rating:number;
	comment:string = "";

	constructor()
	{
		this.name = "";
		this.ingredients = [];
		this.instructions = "";
		this.tags = [];
		this.rating = -1;
		this.comment = "";
	}
}

function newRecepie()
{
	let rec:Recepie = new Recepie();

	rec.name = document.getElementById("name").value;

	let ingredients:any = document.getElementById("kC_ingredients").children;
	for(let i = 0; i < ingredients.length; i++)
	{
		rec.ingredients.push(ingredients[i].innerHTML);
	}
	alert(rec.ingredients);

	let tags:any = document.getElementById("kC_tags").children; 
	for(let i = 0; i < tags.length; i++)
	{
		rec.tags.push(tags[i].innerHTML);
	}
	alert(rec.tags);
	
	rec.rating = Number(document.getElementById('rating').value);
	alert(rec.rating);
}
