module.exports =  {
    name: "reset-prefix",
    code: `$setServerVar[prefix;*;$message]
$title[Wykonano komende]
$description[Zrestartowano prefix dla serwera $message]
$footer[$addtimestamp]
$color[GREEN]
$onlyForIDs[847042688675217439;850843293272113163;526711537373806592;246158728393523200;586148596936736768; {title: Brak Uprawnień!} {description: Wymaga permisji min. Moderator} {footer: $Addtimestamp}]`
}