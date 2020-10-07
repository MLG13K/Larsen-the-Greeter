const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
require('dotenv').config();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', () => {
    console.log('Larsen is Live!'); //client.once??

});

client.on('guildMemberAdd', member =>{
    console.log('hit');
    const channel = member.guild.channels.cache.get(process.env.WELCOME_CHAN);   
    if(!channel) return;

    channel.send(`Welcome to the best server ever, ${member}, you are now officially apart of something great and will be classified as a Blueberry for now`);

    let memberRole = member.guild.roles.cache.get(process.env.ROLE_ID); //change testberry to blueberry after testing
    member.roles.add(memberRole); //adding role to new member
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }else if(command === 'youtube') {
        client.commands.get('youtube').execute(message, args);
    }
});


client.login(process.env.TOKEN);