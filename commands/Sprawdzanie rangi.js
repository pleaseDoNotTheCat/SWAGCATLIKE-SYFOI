module.exports = {
    name: "crank",
    code: `
$argscheck[1; spinguj osobę]
$title[Sprawdzanie rangi] $description[ranga użytkownika $message to **$getglobaluservar[rank;$mentioned[1]]**]
$footer[$addtimestamp]
$color[BLUE]
`
}