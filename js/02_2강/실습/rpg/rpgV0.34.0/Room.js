/*
    맵을 구성하는 하나의 지역을 방(Room)의 개념으로 잡고 있으며,
    여러 방이 모여 하나의 지역 맵을 구성하고 있음.
    이 하나의 방을 표현하기 위한 클래스
*/
function Room(roomName,desc,id,e,w,s,n,u,d){
    this.roomName = roomName;   // 방이름
    this.desc = desc;           // 방설명
    this.id = id;               // 방 고유 id ex.1000 1001 ...
    this.e = e;                 // 이 방의 동쪽에 있는 방의 고유 id (0이면 동쪽 방과 연결 x, 특정id값이면 해당id방과 연결되었다는 뜻)
    this.w = w;                 // 이 방의 서쪽에  //
    this.s = s;                 // //      남 //
    this.n = n;                 // //      북 //
    this.u = u;                 // //      위 //
    this.d = d;                 // //      밑 //

    this.displayRoomInfo = function(){
        tv("\n[ "+this.roomName+" ]\n");
        tv(this.desc+"\n");
        tv(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function(){
        var enters = "출구 : [";
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