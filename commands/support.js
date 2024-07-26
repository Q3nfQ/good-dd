/*

 
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by Q3nfQ!                                                  ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/B-B";
      const githubLink = "https://github.com/GOOD-DD";
      const replitLink = "https://replit.com/GOOD-DD";
      const youtubeLink = "https://www.youtube.com/Q3nfQ";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1163577871265185865/1249117234614243561/standard.gif?ex=66a4c1d4&is=66a37054&hm=9f9649feb771107c9a03e702307a14f8a8c66aadbd40655b07c4719da63650cc&', 
              url: 'https://discord.gg/B-B'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1163577871265185865/1249117234614243561/standard.gif?ex=66a4c1d4&is=66a37054&hm=9f9649feb771107c9a03e702307a14f8a8c66aadbd40655b07c4719da63650cc&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*

 
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by Q3nfQ!                                                  ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
