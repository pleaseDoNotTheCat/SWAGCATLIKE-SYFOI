module.exports = {
    name: 'id-ban',
    code: ` 
$title[ID BAN!!!]
$description[Moderator **<@$authorID>**

Użytkownik łamiący regulamin <@$message>



**serwer** $serverName]
$color[RED]

$dm[$message]
$argsCheck[1; ]
$onlyPerms[ban; ]





`
} 
