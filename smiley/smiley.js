define(function(){
	var me = {};
	me.url = "http://api.justsospecial.com/smiley/img/";
	me.model = {
		"\\(afraid\\)":"afraid.png",
		"\\(cry\\)":"cry.png",
		"\\(devil\\)":"devil.png",
		"\\(grin\\)":"grin.png",
		"\\(like\\)":"like.png",
		"\\(lol\\)":"lol.png",
		"\\(love\\)":"love.png",
		"\\(mad\\)":"mad.png",
		"\\(monkey\\)":"monkey.png",
		"\\(oh\\)":"oh.png",
		"\\(ok\\)":"ok.png",
		"\\(sad\\)":"sad.png",
		"\\(scared\\)":"afraid.png",
		"\\(smile\\)":"smile.png",
		"\\(star\\)":"star.png",
		"\\(tear\\)":"tear.png",
		"\\(wink\\)":"ok.png"
	};
	

	me.getSmileys=function(str){
		if (!str) return;
		var keys = Object.keys(me.model);
		for (var i=0;i<keys.length;i++){
			//console.log(keys);
			//str = str.replace(/\(cool\)/g, '<img class="smiley" src="' + me.url + 'cool.png">');
			var re = new RegExp(keys[i],"g");
			str = str.replace(re, '<img class="smiley" src="' + me.url + me.model[keys[i]]+'">');
		}
		return str;
	};
	
	return me;
});