/*주인공 정의*/
class Hero extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY, bg){
        super(container, src, x, y, width, height, velX, velY);

        //부모에 전달하지 않고, 나만이 갖고 있는 특징..
        this.bg=bg;

        //내가 원하는 스타일의 대포를 생성하자
        this.cannon=new Cannon(this.container, "", this.x-(150*(40/100)), this.y, 150,8,0,0,"green"); //주인공이 대포를 보유한다  객체가 다른 객체를 보유하는 관계를
                            //has a 관계라 한다. Hero has a cannon 

        //이미지 사용하지 않고, div에 배경으로 처리...
        if(this.src.length <=1){ //넘어온 이미지가 없다면..
            this.div.style.background=this.bg;
        }
    }
}