
async function advice () {
    try {
        let advice1 = await fetch("https://api.adviceslip.com/advice");
        if (!advice1.ok) {
            throw new error("None");
        } else {
            let data = await advice1.json();
            $(".id").text(data.slip.id);
            $(".text1").text(data.slip.advice);
            console.log("Success!");
        }
    } catch (error) {
        $(".text").text("Could not generate resource. Check your internet connection");
        $(".text").addClass("error");        
    }
}


$(".dice").click(() => {
    advice();
});