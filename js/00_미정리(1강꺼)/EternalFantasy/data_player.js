function Player(){
    this.name = "";
    this.hp = 0;
    this.race = "";
    this.job = "";

    this.desc = function(){
        return this.name + "이(가) " + "서 있다. <" + this.race + "/" + this.job + "> [HP]:[" + this.hp + "]";
    }
}