var elswitchButton = document.querySelector(".mode-switch");
        elswitchButton.addEventListener("click" , function() {
            console.log(elswitchButton.checked);
            document.body.classList.toggle("dark")

        })