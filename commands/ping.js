module.exports = {
    name: 'ping',
    description: "this is the welcome",
    execute(message, args) {
        message.channel.send('pong!');


    }
};