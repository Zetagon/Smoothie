function deleteElement(e)
{
	e.parentNode.removeChild(e);

}

function addKeyword(element)
{
	let selector:string ="#" + element.parentNode.id + " .keywordCollection";
	let div = document.createElement("div");
	div.innerHTML = "<button class='keyword' onclick='deleteElement(this)'>" + element.value + "</button>"
	let child = div.firstChild;
	document.querySelector(selector).appendChild(child);
//	element.previousElementSibling.innerHTML += "<button class='keyword' onclick='deleteElement(this)>" + element.value + "</button>";
}

function activateKeyWordText()
{
	let searchboxes= document.getElementsByClassName("keywordText");
	for(let i:number =0 ; i < searchboxes.length ; i++)
	{
		searchboxes.item(i).addEventListener("keypress", function(event){
			var key = event.which || event.keyCode;
			if (key === 13) { // 13 is enter

				addKeyword(this)
				this.value = "";
			}	
		})
	}
}
