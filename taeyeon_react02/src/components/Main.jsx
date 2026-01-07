import "./Main.css";

function Main() {
    let cssVar = {
        backgroundColor:"red",
        marginTop: "20px"
    }
    return(
        <div>
            <h1 style={{backgroundColor:"yellow", fontSize:"55px"}}>메인</h1>
            <span style={cssVar}>css 적용</span><br/>
            <span className="logout">외부 css 적용</span>
        </div>
    );
}

export default Main;