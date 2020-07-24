var search_button = document.getElementById("search-button")

search_button.addEventListener("click", () => {
    main()
})

document.getElementById("search-word").addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        main()
    }
})

function main() {
    content = document.getElementById("search-word").value
    if (content !== "") {
        fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + content, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
                "x-rapidapi-key": "91eaf77319mshf13797e3a2c75eep170633jsn52a062d71971"
            }
        })
            .then(res => res.json())
            .then(data => {
                add_result(content, data.list)
            })
    }
}


function add_result(name, result) {
    result_div = document.getElementById("result")

    prev_data = result_div.innerHTML

    result_div.innerHTML = `<h1 style="font-weight:bold;text-decoration:underline;">${name.toUpperCase()}</h1>`

    result.forEach(e => {
        result_div.innerHTML += `
        <div class="each-result-wrapper">
            <p style="font-size: 18px; font-weight:bold;background-color:rgb(236, 236, 236);padding:10px;border-radius:10px;">
              ${e.definition}
            </p>
            <p style="font-size:16px">
                >> ${e.example}
            </p>
        </div>
        `
    });

    result_div.innerHTML += prev_data
}