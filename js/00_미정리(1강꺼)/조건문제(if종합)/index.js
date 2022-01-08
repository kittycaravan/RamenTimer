window.onload = function () {
    var a = -1;
    var b = 2;
    var c = 3;
    var d = 100;
    var e = 1000;
    var f = 0;
    var g = 0;
    
    // <
    // >
    // ==
    // !=
    // 식 && 식
    // 식 || 식
    // (식 && 식) || (식 && 식)
    // (식 || 식) && (식 || 식)

    if( a < b ) {			
        if( c > b ) {		
            if( f == g ) {	
                if( a != b ) {			
                    if( a < b && a != b ) {		
                        if( a < b || a == b ) {	
                            if( ( a < b && a != b ) || ( d < e && f != g ) ) {			
                                if( ( a < b || a == b ) && ( c < d || a == b ) ) {		
                                    alert("성공");  // 마지막 8중첩까지 true 면 alert("성공"); 출력
                                }		
                            }			                                
                        }	
                    }		
                }			                    
            }	
        }		
    }			    
}

