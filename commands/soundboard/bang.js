import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class BruhCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/bang.mp3", this.message);
  }

  static description = "Plays the \"Baaaang\" sound effect";
  static aliases = [""];
}

export default BruhCommand;
