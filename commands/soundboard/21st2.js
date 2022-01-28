import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class OofCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/21st2.mp3", this.message);
  }

  static description = "Plays the second 21st century moment";
  static aliases = [];
}

export default OofCommand;
