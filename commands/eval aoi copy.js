module.exports = {
    name: 'eval',
    code: `
       $title[EVAL]
        $description[ \`\`\`Yaml
$djsEval[$message;yes]​ \`\`\`  
 Twoj zajebisty wpis do evala **$message ​**]
czas przetwarzania $executionTimems

$color[GREEN]
$footer[$addTimestamp]
$log[$djsEval[member.id;yes], $message]
$onlyForIDs[850843293272113163;526711537373806592;540984502252601356;847042688675217439; :x: Nie jesteś założycielem bota]`
}