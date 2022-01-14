import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class JeansCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/jeanspants.mp3", this.message);
  }

  static description = "Apple Bottom JEANS";
  static aliases = [];
}

export default JeansCommand;
