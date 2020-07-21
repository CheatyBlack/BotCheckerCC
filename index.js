const Discord = require('discord.js');
const { prefix, token, checker, binlist } = require('./config.json');
const client = new Discord.Client();
var request = require('request');

client.once('ready', async () => {
    console.log('ʙɪʟʟɪᴇ ᴄʜᴋ [ʙᴇᴛᴀ] ᴏɴʟɪɴᴇ');
    //client.channels.get("<SELECTED CHANNEL>").send("@here\n"+"```ʙɪʟʟɪᴇ ᴄʜᴋ [ʙᴇᴛᴀ] ɪs ɴᴏᴡ ᴏɴʟɪɴᴇ```")
});

client.on('message', async message => {

    //if(message.channel.id != "<SELECTED CHANNEL>") return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(`${prefix}chk`)){
        if(message.content == `${prefix}chk`){
            message.delete();
            message.channel.send("```ᴄᴏᴍᴍᴀɴᴅ ɪɴᴄᴏᴍᴘʟᴇᴛᴇ, ᴘʟᴇᴀsᴇ ᴀᴅᴅ ᴄᴄ ɪɴғᴏ\nᴛʏᴘᴇ "+`${prefix}help`+" ᴛᴏ ᴠɪᴇᴡ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs```")
        }else{
            cc_info = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.delete();
            //message.channel.send("```ʙᴏᴛ ᴡɪʟʟ ᴄᴏɴᴛᴀᴄᴛ ᴄᴠᴠ ᴄʜᴇᴄᴋᴇʀ ғᴏʀ ʀᴇsᴘᴏɴsᴇ\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ғᴏʀ ᴀ ᴍᴏᴍᴇɴᴛ```").then(msg => {
            message.channel.send("```ʙᴏᴛ ᴡɪʟʟ ᴄᴏɴᴛᴀᴄᴛ ᴄᴄɴ ᴄʜᴇᴄᴋᴇʀ ғᴏʀ ʀᴇsᴘᴏɴsᴇ\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ғᴏʀ ᴀ ᴍᴏᴍᴇɴᴛ```").then(msg => {
                    msg.delete(5000)
            })
            request(`${checker}${cc_info}`, function (error, response, body) {
                message.reply("```"+body+"\n\nғᴏʀ ᴍᴏʀᴇ ɪɴғᴏ ᴛʏᴘᴇ "+`${prefix}help`+"```").then(msg => {
                    msg.delete(20000)
                });
            });
        }
    }else if(message.content.startsWith(`${prefix}privchk`)){
        cc_info = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
        message.delete();
        //message.channel.send("```ʙᴏᴛ ᴡɪʟʟ ᴄᴏɴᴛᴀᴄᴛ ᴄᴠᴠ ᴄʜᴇᴄᴋᴇʀ ғᴏʀ ʀᴇsᴘᴏɴsᴇ\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ғᴏʀ ᴀ ᴍᴏᴍᴇɴᴛ```").then(msg => {
        message.channel.send("```ʙᴏᴛ ᴡɪʟʟ ᴄᴏɴᴛᴀᴄᴛ ᴄᴄɴ ᴄʜᴇᴄᴋᴇʀ ғᴏʀ ʀᴇsᴘᴏɴsᴇ\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ғᴏʀ ᴀ ᴍᴏᴍᴇɴᴛ```").then(msg => {
                msg.delete(5000)
        })
        request(`${checker}${cc_info}`, function (error, response, body) {
            message.author.send("```"+body+"```")
        });
    }else if(message.content.startsWith(`${prefix}help`)){
       message.delete();
       message.channel.send("```" + `ʙɪʟʟɪᴇ ᴄʜᴋ [ʙᴇᴛᴀ] ᴄᴏᴍᴍᴀɴᴅs\n\n${prefix}chk - ᴄʜᴇᴄᴋ ᴀɴᴅ ᴘᴏsᴛ ʀᴇsᴜʟᴛ ᴘᴜʙʟɪᴄʟʏ\n${prefix}privchk - ᴄʜᴇᴄᴋ ᴀɴᴅ ᴅᴍ ʀᴇsᴜʟᴛ\n${prefix}bin - ᴄʜᴇᴄᴋ ғᴏʀ ʙɪɴ ɪɴғᴏ\n${prefix}help - sʜᴏᴡ ᴀᴠᴀɪʟᴀʙʟᴇ ᴄᴏᴍᴍᴀɴᴅs\n\nᴇx1. ${prefix}chk 1234567890123456|12|1234|123\nᴇx2. ${prefix}privchk 1234567890123456|12|1234|123\n\n\nᴀʟʟ ᴘᴜʙʟɪᴄ ʀᴇsᴜʟᴛs ᴡɪʟʟ ʙᴇ ᴅᴇʟᴇᴛᴇᴅ ᴀғᴛᴇʀ 20s`+"```");
    }else if(message.content.startsWith(`${prefix}bin`)){
        if(message.content == `${prefix}bin`){
            message.delete();
            message.channel.send("```ᴄᴏᴍᴍᴀɴᴅ ɪɴᴄᴏᴍᴘʟᴇᴛᴇ, ᴘʟᴇᴀsᴇ ᴀᴅᴅ ᴄᴄ ɪɴғᴏ\nᴛʏᴘᴇ "+`${prefix}help`+" ᴛᴏ ᴠɪᴇᴡ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs```")
        }else{
            cc_info = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.delete();
            request(`${binlist}${cc_info}`, function (error, response, body) {
                message.reply("```"+body+"\n\nғᴏʀ ᴍᴏʀᴇ ɪɴғᴏ ᴛʏᴘᴇ "+`${prefix}help`+"```").then(msg => {
                    msg.delete(20000)
                });
            });
        }
     }
});

client.login(token);
