import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class WinXPCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/table.m4a", this.message);
  }

  static description = "Oh No! Our Table! (Currently using a placeholder version)";
  static aliases = ["ohno"];
}

export default WinXPCommand;
