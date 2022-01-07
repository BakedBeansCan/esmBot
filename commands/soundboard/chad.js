import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class MailCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Giga-Chad.mp3", this.message);
  }

  static description = "Plays the Giga Chad Theme";
  static aliases = [];
}

export default MailCommand;
