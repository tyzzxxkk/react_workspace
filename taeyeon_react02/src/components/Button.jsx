function Button({color="blue", text, children}) {
    
    // console.log(props);
    const btnClicke=(e)=>{
        console.log(e);
        console.log("x값:", e.clentX);
        alert("클릭!")
    };

    return (
        <>
        <button style={{color:color}} onClick={btnClicke}>{text}
        {children}
        </button>
        </>
    );
}

export default Button;