import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class WinXPCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Roblox_Porn_Games.mp3", this.message);
  }

  static description = "vineboomus maximus";
  static aliases = [];
}

export default WinXPCommand;
