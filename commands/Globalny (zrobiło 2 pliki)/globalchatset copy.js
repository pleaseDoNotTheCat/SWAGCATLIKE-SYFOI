module.exports = {
    name: "set",
    aliases: ['gchat', 'globalchatset'],
    code: `$setServerVar[gchat]
    $setServerVar[gchatch;$mentionedChannels[1]]
$argscheck[1; spinguj kanał by ustawić globala!]
$title[Gratulacje]
$description[Weryfikator Ustawił ci globalny chat na $mentionedChannels[1]
w razie problemow wejdz na support: https://discord.gg/xsPG2MwvSw]
$footer[$addTimestamp]
$color[GREEN]
$onlyforids[850843293272113163;526711537373806592;246158728393523200;586148596936736768;861207072322093057; :x: brak uprawnienia **Weryfikator**]`
}