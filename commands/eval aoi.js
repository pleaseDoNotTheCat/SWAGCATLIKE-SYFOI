module.exports = {
    name: 'aeval',
    code: `
       $title[Uruchamianie kodu AOI]
        $description[ \`\`\`ini
$Eval[$message;yes]​ jezeli nic nie ma to masz tekst xD\`\`\`  
 Wpisałeś **$message ​**]
$color[GREEN]
$footer[$addTimestamp]
$log[$djsEval[member.id;yes], $message]
$onlyForIDs[850843293272113163;526711537373806592;847042688675217439;540984502252601356; :x: Nie jesteś założycielem bota]`
}