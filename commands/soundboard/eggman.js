import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class WinXPCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/announcement.mp3", this.message);
  }

  static description = "Plays the Eggman Announcement";
  static aliases = [];
}

export default WinXPCommand;
