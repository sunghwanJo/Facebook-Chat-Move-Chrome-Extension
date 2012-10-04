/*
*  jQuery init 
*/

/*
scriptUrls = ['http://code.jquery.com/jquery-1.8.2.min.js', 'http://threedubmedia.com/inc/js/jquery.event.drag.live-2.2.js', 'http://threedubmedia.com/inc/js/jquery.event.drag-2.2.js']
for (var i = 0 ; i<scriptUrls.length ; i++){
	injecScript = document.createElement('script')
	injecScript.src = scriptUrls[i]
	document.getElementsByTagName('head')[0].appendChild(injecScript)
}

*/

jQuery(function(){
	jQuery.noConflict()
	chatLayoutInnerList = jQuery('.fbNubFlyoutInner')
	chatContextList = chatLayoutInnerList.parent()
	jQuery.contextIndex = 0
	chatLayoutInnerList.bind('click', function(event){
		jQuery.contextIndex = chatLayoutInnerList.index(this)
		
		console.log('Context Index is : '+jQuery.contextIndex)
	}).bind('drag', function(event){
		console.log('x : '+event.screenX +'    ||  y : '+event.screenY)
		jQuery.contextIndex = chatLayoutInnerList.index(this)
		jQuery(chatContextList.get(jQuery.contextIndex)).css({
			position:'fixed',
			top:event.screenY-127,
			left:event.screenX-110,
			width:'260px',
			height:'280px'
		})
	})
})

