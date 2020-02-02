function validateForm(form) {
    var errorsContainer = document.querySelector("div.info-container .error-message");
    while (errorsContainer.firstChild) {
        errorsContainer.firstChild.remove();
    }
    var errors = [];

    for (var field in formValidators) {
        const fieldValidationResult = formValidators[field](form);

        if (fieldValidationResult.invalid) {
            errors .push(fieldValidationResult.message);
            var errorElement = document.createElement("p");
            errorElement.innerText = fieldValidationResult.message;
            errorsContainer.appendChild(errorElement);
        }
    }

    return errors.length == 0;
}

const formValidators = {
    "name": (form) => ({"invalid": form["name"].value.length <= 6, "message": "Twoje imię jest za krótkie"}),
    "email": (form) => ({"invalid": !form["email"].value.includes("@"), "message": "Email musi posiadać znak @"}),
    "surname": (form) => ({"invalid": form["surname"].value.length <= 6, "message": "Twoje nazwisko jest za krótkie"}),
    "agree": (form) => ({"invalid": !form["agree"].checked, "message": "Musisz zaakceptować warunki"}),
    "pass1": (form) => {
        var pass1 = form["pass1"].value || "";
        var pass2 = form["pass2"].value || "";

        var passwordsNotEqual = pass1 !== pass2;
        var anyIsEmpty = pass1.length === 0 || pass2.length === 0;
        return {"invalid": passwordsNotEqual || anyIsEmpty, "message": "Hasła nie są takie same lub puste"};
    }
};
