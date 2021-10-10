const aoijs = require("aoi.js")
const { token } = require(`./config.json`)
const bot = new aoijs.Bot({
    token: `${token}`, // Token
    prefix: "$getServerVar[prefix]", // Prefix
    mobile: true // Mobile presence
})

bot.onMessage() // Initial Command line

bot.loadCommands('./commands')

bot.readyCommand({
    channel: "", // Message Channel
    code: `$createVar[gchatch]
$log[Uwielbiam swagcaty, no w sumie dlatego że nim jestem :D :cat::cat::cat::cat: Moja nazwa i tag to $userTag[$clientID]]
$setstatus[Nie pinguj mnie/// Dont ping me;COMPETING;Online]` // Message
})

bot.variables({
   prefix: "*",
   rank: "User",
   ideach: "0" 
})

bot.botJoinCommand({
    channel: "887664636839735357",
    code: `$channelSendMessage[882942379684933669;
    Nazwa: $serverName[$guildID]
    ID: $guildID
    ID Właściciela: $ownerName]`
    })

    bot.botLeaveCommand({
        channel: "887664636839735357",
        code: `$channelSendMessage[882942379684933669;
            Nazwa: $serverName[$guildID]
            ID: $guildID
            ID Właściciela: $ownerName;no]`
        })