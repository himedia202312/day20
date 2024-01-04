/*주인공이 보유할 대포*/
class Cannon extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY, bg){
        super(container, src, x, y, width, height, velX, velY);

        //부모에 전달하지 않고, 나만이 갖고 있는 특징..
        this.bg=bg;
        this.deg=0; //대포가 보유할 각

        //이미지 사용하지 않고, div에 배경으로 처리...
        if(this.src.length <=1){ //넘어온 이미지가 없다면..
            this.div.style.background=this.bg;
            this.div.style.borderRadius=40+"%";
        }
    }

    //대포의 각도를 조절하는 메서드
    setDegree(n){
        this.deg +=n; //값의 변화 
        this.div.style.transform="rotate("+this.deg+"deg)";//화면에 반영 

        //정보출력 
        infoBox.div.innerText=this.deg+"˚";
    }
}