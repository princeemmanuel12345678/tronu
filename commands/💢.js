/*CMD
  command: π’
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                                 

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
}else{
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let profit = Libs.ResourcesLib.userRes("profit");
let refcom = Libs.ResourcesLib.userRes("refcom");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

Bot.sendKeyboard("π¦ Investment History,\nβ Withdrawals History,π Calculator,\nβοΈ Support,π Wallet,\nπ«Exit","*π’ Account Balance*\n\n*π Withdrawable Balance: *\n"+res.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*res.value()+ "\n\n*π Active Investment: * \n" +deposit.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*deposit.value() + "\n\n*π― Total Profit:* \n" +profit.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*profit.value() + "\n\n*π΅οΈ Affiliate Earnings:*\n" +refcom.value().toFixed(8) +" TRX ~ $" +TRX.toFixed(2)*refcom.value() + "\n\n*π Total Withdrawn:*\n" +withdraw.value().toFixed(8) + " TRX ~ $" +TRX.toFixed(2)*withdraw.value() + "\n\n*π€ Bot Time:* *" +time+"*\n")

}
