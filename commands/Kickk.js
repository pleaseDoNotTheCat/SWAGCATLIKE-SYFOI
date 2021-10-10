module.exports = {
    name: 'kick',
    code: ` 
$title[Kick]
$description[Moderator **<@$authorID>**



Powód: $nomentionmessage

serwer $serverName]
$color[RED]

$kick[$mentioned[1]]

$onlyPerms[kick; :x: Brak permisji **banowanie użytkowników**]





`
} 
