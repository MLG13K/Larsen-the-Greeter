module.exports = {
    name: 'youtube',
    description: "sends a welcome youtube link",
    execute(message, args) {
        message.channel.send('https://www.youtube.com/watch?v=kK42LZqO0wA');
}
}