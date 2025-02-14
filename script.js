const pokemon = {
    144: "a",
    267: "b",
    441: "c",
    225: "d",
    133: "e",
    656: "f",
    810: "g",
    214: "h",
    686: "i",
    135: "j",
    382: "k",
    249: "l",
    778: "m",
    164: "n",
    741: "o",
    393: "p",
    912: "q",
    744: "r",
    700: "s",
    696: "t",
    197: "u",
    100: "v",
    527: "w",
    178: "x",
    469: "y",
    570: "z",
}

const winningCombos = [
    [
        "267",
        "133",
        "164",
        "686",
        "441",
        "214",
        "741",
        "741",
        "700",
        "133",
        "469",
        "741",
        "197",
    ],
    // ben i choose you
]

$(() => {
    let result = []
    // Add your code here
    $(".search").submit(e => {
        e.preventDefault()
        let search = $("#poke-search").val()
        if (pokemon[search] === undefined) {
            alert("Not a valid entry")
        } else {
            const html = `<li class="pokecard pokecard-${pokemon[search]}"></li>`
            $(".pokecards").append(html)
            result.push(search)
        }
        if (result.length === 13) {
            for (let i = 0; i < winningCombos.length; i++) {
                if (result.toString() === winningCombos[i].toString()) {
                    showLuvDisc()
                }
            }
        }
        $("#poke-search").val("")
    })

    $("#poke-clear").click(() => {
        $(".pokecards").empty()
        result = []
    })

    $("#poke-give-answer").click(() => {
        $(".pokecards").empty()
        result = []
        winningCombos[0].forEach(element => {
            const html = `<li class="pokecard pokecard-${pokemon[element]}"></li>`
            $(".pokecards").append(html)
        })
        showLuvDisc()
    })

    $("#poke-sort").click(() => {
        $(".pokecards").empty()
        result = []
        Object.values(pokemon)
            .sort()
            .forEach(element => {
                const html = `<li class="pokecard pokecard-${element}"></li>`
                $(".pokecards").append(html)
            })
    })
})

function showLuvDisc() {
    const numberOfPNGs = 200
    const imageUrl = "images/luvdisc-right.png" // Replace with your transparent PNG URL

    for (let i = 0; i < numberOfPNGs; i++) {
        const img = document.createElement("img")
        img.src = imageUrl
        img.className = "luvdisc"

        // Set random top position between 0 and window height
        img.style.top = `${Math.random() * window.innerHeight}px`

        // Set random animation duration between 5 and 15 seconds
        img.style.animationDuration = `${5 + Math.random() * 5}s`

        // Set random size between 50px and 150px
        const size = 50 + Math.random() * 100
        img.style.width = `${size}px`
        img.style.height = `${size}px`

        // Optional: Vary opacity for more visual interest
        img.style.opacity = `${0.5 + Math.random() * 0.5}`

        document.body.appendChild(img)
    }
}
