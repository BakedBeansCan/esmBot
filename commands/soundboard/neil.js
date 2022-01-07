import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class NeilCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Neil-Cicierega-The-End.mp3", this.message);
  }

  static description = "Holy crap get this out of my head already (owner plays bus simulator too much lmfao)";
  static aliases = [""];
}

export default NeilCommand;
