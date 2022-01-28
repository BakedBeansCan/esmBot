import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class FuckCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/fuck.mp3", this.message);
  }

  static description = "Fuck you! You Fuckin' Dick!";
  static aliases = [];
}

export default FuckCommand;
