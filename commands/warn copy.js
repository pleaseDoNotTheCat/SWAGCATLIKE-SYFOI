module.exports = {
    name: 'warn',
   
    code: `$title[Ostrzeżenie]
    $description[Moderator **$username#$discriminator ($authorID)**
                               
                    $image[$authorAvatar]


  
    
   
 **Powód ostrzeżenia $noMentionMessage**
    
   ** serwer $serverName**]
    $footer[$addTimestamp]
    $color[RED]
    $dm[$mentioned[1]]
    $onlyPerms[ban;kick; :x: nie masz permisji]`
} 