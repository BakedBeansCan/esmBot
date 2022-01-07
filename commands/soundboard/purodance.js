import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class OofCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/PURO DANCE.mp3", this.message);
  }

  static description = "Plays The Epic Puro Dance Song";
  static aliases = ["Puro"];
}

export default OofCommand;
