


// ██╗░░░██╗██╗░░░░░████████╗██╗███╗░░░███╗░█████╗░████████╗███████╗  ███████╗██╗██╗░░░░░████████╗███████╗██████╗░
// ██║░░░██║██║░░░░░╚══██╔══╝██║████╗░████║██╔══██╗╚══██╔══╝██╔════╝  ██╔════╝██║██║░░░░░╚══██╔══╝██╔════╝██╔══██╗
// ██║░░░██║██║░░░░░░░░██║░░░██║██╔████╔██║███████║░░░██║░░░█████╗░░  █████╗░░██║██║░░░░░░░░██║░░░█████╗░░██████╔╝
// ██║░░░██║██║░░░░░░░░██║░░░██║██║╚██╔╝██║██╔══██║░░░██║░░░██╔══╝░░  ██╔══╝░░██║██║░░░░░░░░██║░░░██╔══╝░░██╔══██╗
// ╚██████╔╝███████╗░░░██║░░░██║██║░╚═╝░██║██║░░██║░░░██║░░░███████╗  ██║░░░░░██║███████╗░░░██║░░░███████╗██║░░██║
// ░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝  ╚═╝░░░░░╚═╝╚══════╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝

// ██████╗░░█████╗░████████╗░░░  ░█████╗░░█████╗░██████╗░███████╗██████╗░  ██████╗░██╗░░░██╗
// ██╔══██╗██╔══██╗╚══██╔══╝░░░  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗  ██╔══██╗╚██╗░██╔╝
// ██████╦╝██║░░██║░░░██║░░░░░░  ██║░░╚═╝██║░░██║██║░░██║█████╗░░██║░░██║  ██████╦╝░╚████╔╝░
// ██╔══██╗██║░░██║░░░██║░░░██╗  ██║░░██╗██║░░██║██║░░██║██╔══╝░░██║░░██║  ██╔══██╗░░╚██╔╝░░
// ██████╦╝╚█████╔╝░░░██║░░░╚█║  ╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝  ██████╦╝░░░██║░░░
// ╚═════╝░░╚════╝░░░░╚═╝░░░░╚╝  ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░  ╚═════╝░░░░╚═╝░░░

// ░█████╗░██╗░░░██╗░██████╗████████╗░█████╗░███╗░░░███╗███╗░░██╗░█████╗░████████╗███████╗░░░██╗░██╗░░█████╗░░░██╗██╗░█████╗░░░██╗██╗
// ██╔══██╗██║░░░██║██╔════╝╚══██╔══╝██╔══██╗████╗░████║████╗░██║██╔══██╗╚══██╔══╝██╔════╝██████████╗██╔══██╗░██╔╝██║██╔══██╗░██╔╝██║
// ██║░░╚═╝██║░░░██║╚█████╗░░░░██║░░░██║░░██║██╔████╔██║██╔██╗██║███████║░░░██║░░░█████╗░░╚═██╔═██╔═╝██║░░██║██╔╝░██║╚██████║██╔╝░██║
// ██║░░██╗██║░░░██║░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║██║╚████║██╔══██║░░░██║░░░██╔══╝░░██████████╗██║░░██║███████║░╚═══██║███████║
// ╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║██║░╚███║██║░░██║░░░██║░░░███████╗╚██╔═██╔══╝╚█████╔╝╚════██║░█████╔╝╚════██║
// ░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝░╚═╝░╚═╝░░░░╚════╝░░░░░░╚═╝░╚════╝░░░░░░╚═╝

const Discord = require('discord.js')
const client = new Discord.Client();
const token = 'BOTTOKEN' //Defining bot token
const filterlog = new Discord.WebhookClient('WEBHOOKID', 'WEBHOOKTOKEN'); //Defining Webhook
const config = require("./config.json"); //Defining the place where we will store our swears
const ping = false //Set to true if you want to ping @here in the channel you set the webhook to everytime the filter log alerts. False on default.

client.once("ready", () => {
  console.log('Filter Bot Online! Created by CustomNate#0494')
});

client.on('message', message => {
    if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){ //Detecting if the message includes any of the words from the swears table
            const filterEmbed = new Discord.MessageEmbed() //Creating a new embed!
            filterEmbed.setTitle('Filter Log Alert!')
            filterEmbed.setDescription('The Filter has detected a swear word!')
            filterEmbed.setColor('#5592c1') //Any hex colour here, i'll just use a random one
            filterEmbed.addField('Message:', `${message.content}`, true)
            filterEmbed.addField('Channel:', `${message.channel}`, true)
            filterEmbed.addField('User:', `${message.author}`, true)
            filterEmbed.setFooter('Could be a false positive.')
            filterlog.send(filterEmbed) //Sending the embed into the webhook

            if (ping === false) { //If you set ping to false it will not ping
              message.reply("Don't say that!")
              message.delete()
            }

            if (ping === true) { //If you set ping to true it will ping @here in the channel you set the webhook in
              filterlog.send('@here')

              message.reply("Don't say that!")
              message.delete()
            }
    }
})

client.login(token);