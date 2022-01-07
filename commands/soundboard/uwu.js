import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class OofCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Sussy.wav", this.message);
  }

  static description = "j";
  static aliases = [];
}

export default OofCommand;
