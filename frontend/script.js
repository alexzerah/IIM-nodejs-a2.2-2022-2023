const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
            "school": "ENS",
        }),
        headers: {
        "Content-Type": "application/json;charset=utf-8"
        }
    }).then(d => {
        return d.json()
    }).then(dd => {
        console.log(dd);
        const li = document.createElement('li');
        li.innerText = dd.school;
        ul.append(li);
    })
})