let form = document.getElementById("form");
let emailInput = document.getElementById("email");
let emailPara = document.getElementById("email_warningMsg");
let loginBtn = document.getElementById("login_button");
let sign_inBtn = document.getElementById("sign_inBtn");


// Login Page Logic
if (form) {
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     const email = emailInput.value.trim();

    //     if (email !== "") {
    //         window.location.href = "Home_page.html";
    //     }else {
    //         emailPara.textContent = "!Required*";
    //     }
    // });

    emailInput.addEventListener("blur", function (event) {
        if (event.target.value === "") {
            emailPara.textContent = "Email is required!!";
        } else {
            emailPara.textContent = "";
        }
    });
}
sign_inBtn.addEventListener("click",function(event){
    window.location.href = "sign_in.html"
})

// Signup Page Logic
const card = document.querySelectorAll(".movies_card");
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".movies_card").forEach((card, index) => {
        card.addEventListener("click", () => {
            alert(`You clicked movie #${index + 1}`);
            
        });
    });
});

//GET Method

// function to check email in GoREST API
function checkEmail(email_value) {

    let url = "https://gorest.co.in/public/v2/users?email=" + email_value;

    fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer be1f658fb5a14278e4b234f98a256c0124876f7118b268a9519f94f3cd28b2d1"
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("API DATA:", data);

            if (data.length > 0) {
                // email exists
                window.location.href = "Home_page.html";
                
            } else {
                // email available
                emailPara.textContent = "❌  Email is not found please Sign In";
                emailPara.style.color = "red";
            }
        })
        .catch(function(error) {
            console.log("ERROR:", error);
        });
}

// when form submitted
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let email_value = emailInput.value.trim();

    if (email_value === "") {
        emailPara.textContent = "Email is required!!";
        emailPara.style.color = "red";
    } else {
        checkEmail(email_value); // 🔥 calling GET method
    }
});
