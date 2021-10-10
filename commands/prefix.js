module.exports = {
    name: 'prefix',
    code: `
        $setServerVar[prefix;$message] 
        $title[Pomyślnie zmieniono prefix]
        $description[Prefix twojego serwera został zmieniony pomyślnie w razie problemu z prefixem wejdź na support: https://discord.gg/Z386TMAdGR]
$color[GREEN]
$footer[zmieniono prefix na $message wykonane $addtimestamp]
$argscheck[1; :x: podaj prefix!]
$onlyPerms[admin; :x: Wystąpił błąd w komendzie]`
}