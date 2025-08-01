let btn = document.querySelector("button");
let body = document.querySelector("body");
curr_mode = "light";

btn.addEventListener("click", () => {
    if (curr_mode === "light"){
        curr_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        curr_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(curr_mode);
});
