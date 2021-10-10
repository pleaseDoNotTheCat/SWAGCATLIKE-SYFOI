module.exports = {
    name: "set-rank",
    code: `
    $setGlobalUserVar[rank;$message[2];$message[1]]
  $title[Ustawiono range]
$description[ ustawiono range $message[2] dla uzytkownika <@$message[1]>]
$footer[ustawione range  $addtimestamp]
$color[GREEN]
$onlyForIDs[;850843293272113163;847042688675217439;526711537373806592; {title:Błąd!} {description:Komenda dostępna tylko dla właściciela bota.} {color:#eb4034}]`
}