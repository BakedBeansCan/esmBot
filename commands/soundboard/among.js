import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class AmongusYellCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/AMONGUS.m4a", this.message);
  }

  static description = "AMONGUS";
  static aliases = [];
}

export default AmongusYellCommand;
