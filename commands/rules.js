const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Sends Rules Embed"),
  async execute(interaction, client) {
    if (
      interaction.member.roles.cache.has(process.env.DC_ADMIN_ROLE) ||
      interaction.member.roles.cache.has(process.env.DC_MOD_ROLE)
    ) {
      const embed = {
        title: "RULES",
        description: "*Please read the rules below:*",
        color: 16034331,
        image: {
          url: "https://media.discordapp.net/attachments/651470578741542936/813790022657638420/Operations_Logo.png",
        },
        fields: [
          {
            name: ":one:",
            value:
              "Use correct channels for what you are posting \n(Check Channel Description)",
          },
          {
            name: ":two:",
            value: "No loud noises or music played through your microphone!",
          },
          {
            name: ":three:",
            value: "No political or religious arguments!",
          },
          {
            name: ":four:",
            value: "No advertisement or selling of products!",
          },
          {
            name: ":five:",
            value: "No spamming channels!",
          },
          {
            name: ":six:",
            value:
              "If you're streaming while in chat, you MUST have a `#` next to your name!",
          },
          {
            name: ":seven:",
            value: "No offensive or inappropriate remarks or song requests!",
          },
          {
            name: ":eight:",
            value:
              "No abusive talk to admins or moderators (They are here to help)!",
          },
          {
            name: ":nine:",
            value:
              "No NSFW content! NSFW memes are allowed in <#786594678505603082> but they must be memes!",
          },
          {
            name: ":one::zero:",
            value:
              "Do not use the ticketing system for anything other than a legitimate reason!",
          },
          {
            name: ":one::one:",
            value:
              "Your account MUST comply with the Discord [Terms of Service](https://discord.com/terms)! Must be 13-years-old or older.",
          },
        ],
      };

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("rules-button")
          .setLabel("Agree to rules")
          .setStyle("PRIMARY")
      );

      interaction.reply({ embeds: [embed], components: [row] });
    } else {
      interaction.reply({
        content: "You do not have permission to use this command.",
        ephemeral: true,
      });
    }
  },
};
