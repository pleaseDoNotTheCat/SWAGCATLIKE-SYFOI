const msg = "$message"
const optins = "$getServerVar[gchat]"

module.exports = [{
    name: "$alwaysExecute",
    code: `$forEachGuild[gchat]
    
    $onlyForChannels[$getServerVar[gchatch];]
$blacklistIDS[892771551894712390;861207072322093057; ]
`
}, {
    name: "gchat",
    type: "awaitedCommand",
    code: `
    $channelSendMessage[$getServerVar[gchatch];{author: $username#$discriminator $authorid :$authoravatar} {description: ${msg}} {color:RANDOM} {footer:Na co sie patrzysz? tu nic nie ma 👀 }]
$cooldown[1s;]
$suppresserrors[ ]`
}]