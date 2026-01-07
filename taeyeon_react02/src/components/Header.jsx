function Header() {
    let name = "기태연";
    let age = 10;
    let hobby = ["영화", "독서", "노래방"];
    let obj = {
        name: "장",
        age: 5
    }
    let isLogin = true;
    let result;


    return(
        <div>
            <h1>저는 {name} 입니다.<br/>
                나이는 {age+9} 이고,<br/>
                {age%2==0?"짝수":"홀수"}<br/>
                취미는 {hobby} 입니다.<br/>
                로그인 여부는 {String(isLogin)} 이고, 객체는 {obj.name}<br/>

                {isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
            </h1>
        </div>
    );
}

export default Header;