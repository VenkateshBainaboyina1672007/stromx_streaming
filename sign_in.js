let form = document.getElementById("updatePasswordForm");
let email = document.getElementById("email");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");

let paraEmail = document.getElementById("emailErrMsg");
let paraNewPassword = document.getElementById("newPasswordErrMsg");
let paraConfirmPassword = document.getElementById("confirmPasswordErrMsg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let email_value = email.value.trim();

    // validation
    let isValid = true;

    if (email_value === "") {
        paraEmail.textContent = "Required*";
        isValid = false;
    } else {
        paraEmail.textContent = "";
    }

    if (newPassword.value === "") {
        paraNewPassword.textContent = "Required*";
        isValid = false;
    } else {
        paraNewPassword.textContent = "";
    }

    if (confirmPassword.value !== newPassword.value) {
        paraConfirmPassword.textContent = "Password must match";
        isValid = false;
    } else {
        paraConfirmPassword.textContent = "";
    }

    // ✅ Only if valid → call API
    if (isValid) {

        let user = {
            name: "Temp User",
            email: email_value,
            gender: "male",
            status: "active"
        };
        let Options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer be1f658fb5a14278e4b234f98a256c0124876f7118b268a9519f94f3cd28b2d1"
            },
            body: JSON.stringify(user)
        }

        fetch("https://gorest.co.in/public/v2/users",Options)
        
        .then(function(response) {
            console.log("STATUS:", response.status);
            return response.json();
        })
        .then(function(data) {
            console.log("DATA:", data);

            // ✅ redirect ONLY after success
            window.location.href = "Home_page.html";
        })
        .catch(function(error) {
            console.log("ERROR:", error);
        });
    }
});
