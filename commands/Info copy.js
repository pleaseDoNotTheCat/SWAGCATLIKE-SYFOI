module.exports = {
    name: 'swagcatlike',
    nonPrefixed: true,
code: `$argsCheck[1; ❌ nie prawidłowe użycie] $title[Ogólne informacje]
$description[Hej jestem swagcatlike, lubie jeść ścianę na obiad i nie lubie discorda api które mnie spamuje :c 

💥 mój prefix na tym serwerze $getServerVar[prefix]

🌚 globalny prefix *

🏓 Pong! $pingms

⏰⏲️ uptime $uptime

:tools: Twoja ranga **$getGlobalUserVar[rank]**

:robot: Wersja bota: v7.0.8

<:pu:893935267659010049> Użycie CPU: $cpu%

<:Pamiec_Ram:894270959438168064> Użyty ram bota $ramMB

:computer: :keyboard: wersja node $djsEval[process.versions.node;yes]

:information_source: Komenda wpisana przez $userTag

👮‍♂️ Developerzy: Jakieś randomy z żabki

Support https://discord.gg/A8X8pmdnHZ
wiecej pod $getServerVar[prefix]help]
$footer[$addTimestamp]
$color[RANDOM]
$blacklistIDS[861207072322093057; Twoje konto zostało zablokowane bo złamało regulamin
Powód: Blocked By Administrator]`
} 
