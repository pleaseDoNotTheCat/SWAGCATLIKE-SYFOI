module.exports = {
    name: 'warn',
    code: `$title[Ostrzeżenie]
    $description[Moderator **$username#$discriminator ($authorID)**
                                                 
    
    **Powód ostrzeżenia $noMentionMessage**
    
    
$image[$authorAvatar]

    **serwer $serverName**]
    $footer[$addTimestamp]
    $color[RED]
    $onlyPerms[ban;kick; :x: nie masz permisji]`
} 