window.onLoad = function(){
	let keywords = document.getElementsByClassName('keyword')
	for(let i = 0 ; i < keywords.length ; i++)
	{
		keywords[i].onclick = function(){
			this.parentNode.removeChild(this);
		}
	}
}
