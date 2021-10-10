module.exports = {
    name: "global",
    
    code: `$channelsendmessage[893551250015141918; PROSBA O ZALOZENIE GLOBALNEGO KOTA

ID osoby wnioskującej: $authorID
Zaproszenie do serwera: $getserverinvite
Nazwa serwera $serverName
kanał: $message

komenda: $getServerVar[prefix]set #kanał
]
Oczekuj na zweryfikowanie
$argscheck[1; wyslij wzmianke kanalu]
$blacklistIDS[861207072322093057; Azo chuju, nie możesz tego zrobić.]`
}