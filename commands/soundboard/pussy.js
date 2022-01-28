import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class MailCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/pussy.m4a", this.message);
  }

  static description = "Plays the Pussy Sound Effect";
  static aliases = ["yougotmail", "youvegotmail", "aol"];
}

export default MailCommand;
