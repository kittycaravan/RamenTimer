/*
    roomName 방이름
    desc 방설명
    id 방 고유 id ex.1000 1001 ...
    e 동쪽 방의 고유 id (0이면 동쪽으로 연결이 안된 방, 특정id값이면 해당id방과 연결되었다는 뜻)
    w 서 //
    s 남 //
    n 북 //
    u 위 //
    d 밑 //
*/
function Room(roomName,desc,id,e,w,s,n,u,d){
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.e = e;
    this.w = w;
    this.s = s;
    this.n = n;
    this.u = u;
    this.d = d;

    this.displayRoomInfo = function(){
        tv("["+this.roomName+"]\n");
        tv(this.desc+"\n");
        tv(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function(){
        var enters = "출구:[";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        if(u != 0){
            enters = enters + " 위";
        }
        if(d != 0){
            enters = enters + " 밑";
        }
        enters = enters + " ]";
        return enters;
    }

    /* 매개변수로 이동 방향 ex. "동" 을 전달해주면 현재 이 객체의 해당 방향에 대한 연결 방 id 값을 리턴 하는 함수 */
    this.getIdByDirection = function(direction){
        switch(direction){
            case "동":
                return e;
                break;
            case "서":
                return w;
                break;
            case "남":
                return s;
                break;
            case "북":
                return n;
                break;
            case "위":
                return u;
                break;
            case "밑":
                return d;
                break;
        }
    }

    
}