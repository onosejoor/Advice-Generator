let inputer = document.querySelector("#email");
let email2 = document.querySelector(".email2").textContent;
let text = document.querySelector(".email").textContent;
let success = $(".success")   

// FOR VALIDATING EMAIL //
function validateEmail(email) {
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);

  }
// FOR THE SUBSCRIBE BUTTON //
$(".subscribe").click(function () {

    if (validateEmail(inputer.value) === false) {

        $(".hidden").css("display", "block");
        $("input").addClass("wrong");

    } else{

        setTimeout(function () {
        $("input").removeClass("wrong");
        let input = inputer.value
        $(".email2").text(input);
        $(".container").css("display", "none");
        $(".success").css("display", "block");
        }, 500);

        return true;
    }
});

//  FOR THE CLICK BUTTON //

$(".email").click(function () {
    $("input").removeClass("wrong");
    $(".hidden").css("display", "none");
    $("body").css("display", "flex");
});

$(".dismiss").click(function () {
    $(".container").css("display", "block");
    $(".success").css("display", "none");
});

//  FOR INPUT //
$("input").keydown(function () {
    $("input").removeClass("wrong");
})