import Command from "../../classes/command.js";

class InviteCommand extends Command {
  async run() {
    return "You can invite me to your server here: <https://discord.com/api/oauth2/authorize?client_id=908869206320222230&permissions=8&scope=bot>";
  }

  static description = "Gets my invite link";
  static aliases = ["botinfo", "credits"];
}

export default InviteCommand;
