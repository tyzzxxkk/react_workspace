import Button from "./Button"

function Main() {

    const btnProps = {
                text: "배열",
                color: "red"
            };

    return(
        <div>
            <Button {...btnProps} />
            <Button text="카페"> 
                <div>안녕</div>
            </Button>
            <Button text="블로그"/>
        </div>
    );
}

export default Main;