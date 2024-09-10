require("dotenv").config()
const token = process.env.SITE_SENTINAL_TOKEN


const {Client, GatewayIntentBits} = require('discord.js');
const {EmbedBuilder} = require('discord.js');
const client = new Client({ intents: 
    [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
    })
client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

client.on("messageCreate", (message) => {
    if(message.author.bot) return

    if (message.content.toLowerCase().trim() === "come forth sentinal" || message.content.toLowerCase() === "sentinal"){
        const embed = new EmbedBuilder()
            .setTitle ( "Sentinal Here")
            .setDescription ("Ready to serve")
            .setImage("https://i.gifer.com/Khbq.gif")

        message.channel.send({embeds: [embed]})
        .then(() => console.log('Embed with GIF sent!'))
            .catch(console.error);
    }
    if(message.content.includes("cum")){
        message.channel.send("BKL MUU MEI CUM KARDUNGAAA!!!!")
    }
    if(message.content.includes("fak", "fuck" , "fuk")){
        message.channel.send("BKL FAK PHUK MAAT KAR YAHA ")
    }
    if(message.content.includes("sex", "sax", "chex", "sux")){
        message.channel.send("SEX CHUX KI BAAT KARTA HEI SALA VIRGIN!!!")
    }
   
         

    
})
client.login(token)