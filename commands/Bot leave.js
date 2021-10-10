module.exports = {

    name: "botleave",

    code: `$argscheck[1; podaj id serwera, nic po za tym]  $botLeave[$message]
$title[Opuszczono serwer]
$description[Opuszczono serwer o id $message pomyslnie!]
$footer[$username#$discriminator ($authorid) $addtimestamp]
$color[#35FF00]
$onlyforids[850843293272113163;526711537373806592;540984502252601356; {title:Brak uprawnień} {description:nie masz permisji developer} {color:#FF0000}
$suppreserrors[wystąpił błąd]
`

}