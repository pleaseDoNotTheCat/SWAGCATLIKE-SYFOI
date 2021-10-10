module.exports = {
    name: 'id-ban',
    code: ` 
$title[ID BAN!!!]
$description[Moderator **<@$authorID>**

Użytkownik łamiący regulamin <@$message>

serwer $servername]
$color[RED]

$ban[$message]
$argsCheck[1; :x: podaj id nic więcej]
$onlyPerms[ban; :x: Brak permisji **banowanie użytkowników**]





`
} 
