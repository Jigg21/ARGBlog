$(function(){
	EGf8f26aa6.Init();
});


var OnButtonPress = function(selfID){
	var textId = ""
	var passId = ""
	textId = selfID.getAttribute("textid")
	passId = selfID.getAttribute("passid")
	
	var decrypt = function(id,keyId) {
		var isAlpha = function(ch){
			return typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
		}

		var LetterToNumber = function(letter){
			letter = letter.toUpperCase();
			const Letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			for(x=0;x<Letters.length;x++)
			{
				if (Letters[x] == letter)
				{
					return x;
				}
			}
			return -1;
		}

		const Letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


		var div = document.getElementById(id);
		var inputDiv = document.getElementById(keyId);
		var key = inputDiv.getElementsByTagName("input")[0].value;
		var spans = div.getElementsByTagName("span");
		div.children
		console.log(spans)
		var keyIndex = 0;
		var plainText = "";
		var cipherText = "";
		for(spanI=0;spanI<spans.length;spanI++)
		{
			if (spanI >= 2)
			{
				plainText = ""
				cipherText = spans[spanI].innerHTML;
				console.log(cipherText)
				for (i=0;i<cipherText.length;i++){
					if (isAlpha(cipherText.charAt(i))){
						var letNumber = LetterToNumber(cipherText.charAt(i));
						letNumber = (letNumber - LetterToNumber(key.charAt(keyIndex%key.length)) + 26)%26;
						keyIndex += 1;
						if (cipherText.charAt(i) == cipherText.charAt(i).toUpperCase()){
							plainText += Letters[letNumber];
						}else{
							plainText += Letters[letNumber].toLowerCase();
						}
					}else
					{
						if (cipherText.charAt(i) == "<")
							{
								if (cipherText.substr(i,4) == "<br>")
								{
									plainText+= "<br>"
									i += 3
								}
								if (cipherText.substr(i,6) == "<br \>")
								{
									plainText+= "<br \>"
									i += 3
								}	
							}else{
								plainText += cipherText.charAt(i);
							}
					}

				}
				spans[spanI].innerHTML = plainText;
			}
		}
		return "WOW";
	}
	decrypt(textId,passId);
};

var EGf8f26aa6 = {
	
	Init: function() {
		if (typeof(OEConfEGf8f26aa6) === undefined) return;
		var allElements = OEConfEGf8f26aa6;

		for(var ID in allElements) {
			var $el = $('#'+ID); // The element's main <div> tag
			var properties = allElements[ID]; // element's available properties for JS
			this.InitElement(ID, $el, properties);
		}
	},

	InitElement: function(ID, $el, properties) {
		document.getElementById(ID).setAttribute("TextID",properties.TextId)
		document.getElementById(ID).setAttribute("PassID",properties.Passid)
		var result = "OnButtonPress(" + ID + ")"
		document.getElementById(ID).getElementsByTagName("button")[0].setAttribute("onclick",result)

		
	}
	
	

};

