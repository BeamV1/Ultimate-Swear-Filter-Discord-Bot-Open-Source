# Ultimate-Swear-Filter-Discord-Bot-Open-Source

This is the biggest open source discord filter bot there is! It currently has over 1500 words filtered and has customizable settings.

Here's how to use it!

First, you need to install node.js!
You can install it here: https://nodejs.org/en/

Once you have installed node.js, you need to download the files in this repository, you can do this by going to https://github.com/CustomNate/Ultimate-Swear-Filter-Discord-Bot-Open-Source and clicking the green button called Code and then download zip and extracting the zip to desktop.

Now once you have installed node.js and downloaded the zip file, you need to open visual studio code and click File > Open Folder > Desktop and then the zip file that was extracted, once you have done this something like this: https://i.imgur.com/QfnvGcu.png 
now to make it function. If you haven't already, go to https://discord.com/developers/applications and create a new application, name it whatever you want, and when you have made it click bot and Add Bot.
After doing so, something like this should pop up: https://i.imgur.com/8Xe3mj3.png go ahead and click Copy below the token section. Now go back to visual studio code and where 'const token = 'BOTTOKEN'' is, replace it with your bot token.
For example: 'const token = 'NzQ4MjcxMDUwODEwMTk2MDkx.X0a_uA.F5NE9phpV-OTuvgfUJebkYipgZE'' next, go to the server you want to add the bot to and click the gear icon next to the channel you want to log the filter to and create a webhook and call it whatever.
Click copy webhook URL and paste it into any notepad and remove some parts of it. Like this: Before: 'https://discordapp.com/api/webhooks/748254415709798463/GScqRExAJdY4dt4cZ3iVN4eCdpL4fnrQTdbxdq52CQf9GNnSS0z87DmJ1VV8UlRWpWup' After: ID: '748254415709798463' TOKEN: 'GScqRExAJdY4dt4cZ3iVN4eCdpL4fnrQTdbxdq52CQf9GNnSS0z87DmJ1VV8UlRWpWup'
Your id is after /webhooks and the token is after the id. Replace 'WEBHOOKID' in visual studio code with the id of your webhook and 'WEBHOOKTOKEN' with the token of your webhook. You can also change ping to true if you want to ping @here in the channel you set the webhook to every time the filter log alerts but it is False on default.
Now you need to go back to https://discord.com/developers/applications and go to the OAuth2 tab on the bot, on the scopes section, click bot and then on the bot permissions section click Administrator. then this should pop up: https://i.imgur.com/1PDlm3w.png click copy and then go to that URL, use it to invite your bot to the server you want it to be in 
and it should be offline when you have invited it. To get it online, go to visual studio code View Tab > Terminal and then in the terminal type 'node .' And then after a few seconds the bot should be online And you are finished! Remove or add any other filters in config.json.
