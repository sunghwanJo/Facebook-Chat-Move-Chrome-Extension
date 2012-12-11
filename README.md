
	class="fbNubGroup clearfix fbDockChat"  
		-> class="fbNubFlyout fbDockChatTabFlyout"
			->clearfix fbNubFlyoutTitlebar titlebar  <- title bar 클릭시 drag and drop Listerner 발동

		
	fbMercuryChatTab  { position : fixed로 변경 }
	titlebar 의 인덱스를 구해서 parent 값 정하기
	
	$( this ).css({
                        top: event.offsetY,
                        left: event.offsetX
                        });
                    
                        
                        키보드나 추가해보자
                        
       focusedTab 클래스가 추가됨
       opacity 추가하기 쉬울듯
       
       
       ** 새로운 대화창이 추가될떄 매다 이벤트를 추가해줘야함
       1. Message Tab counted 를 추가