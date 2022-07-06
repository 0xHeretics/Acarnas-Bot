const discord = require("discord.js")

const bot = new discord.Client()
let prefix = "/"
bot.login("token")
bot.on("ready", () =>{
    bot.user.setActivity("recruter, fais /recrutement!")
    console.log("Ready!")
})

const embed_recrutement = new discord.MessageEmbed()
.setTitle("Bonjour vous avez fait une demande de recrutement!").setDescription("Ci-dessous, veuillez faire votre candidature. Pour se faire et pour vous aidez, suivez le plan ci-dessous.")
.addFields({name: "Premiere question:", value:"►Presentez vous en jeu (minimum 5 lignes):"},
{name: "Deuxième question:", value:"►Presentez vous en général (présentation personnelle) (minimum 5 lignes)"},
{name: "Troisième question:", value:"►Votre historique de facion:"},
{name: "Quatrième question:", value:"►Vos richesses:"},
{name: "Cinquième question:", value:"►Votre nombre de bases:"},
{name: "Sixième question:", value:"►Etes vous gradés sur Paladium?"},
{name: "Septième question:", value:"►Votre temps de connexion hebdomadaire:"},
{name: "Huitième question:", value:"►Pourquoi notre faction et pas une autre? (10 lignes minimum)"},
{name: "Neuvième question:", value:"►Ce qui vous distingue des autres candidats (minimum 5 lignes):"},
{name: "Dixième question:", value:"►Que recherchez vous dans une faction? (minimum 5 lignes):"},
{name: "Onzième question:", value:"►Espace libre:"}
)

bot.on("message", message =>{
    if(message.content == prefix + "recrutement"){
        if(message.author.id != bot.user.id){
         var channel_recrutement = message.guild.channels.create('candidature-de-' + message.author.username, {
                type: 'text',
                permissionOverwrites: [
                   {
                     id: message.author.id,
                     deny: ['VIEW_CHANNEL'],
                  },
                ],
              })
            .then(chan => chan.send(embed_recrutement)).then(channel =>{channel.channel.setParent("721401720478892112")})
            .catch(console.error);
            
            
        }
    }
})
bot.on("message", message =>{
    if(message.content == "/delete"){
        if(message.member.hasPermission("ADMINISTRATOR")){
            message.channel.delete("fin recrutement")
        } else message.channel.send("cheh")
    }
})




















