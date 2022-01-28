import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class KaboomCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/KABOOM.mp3", this.message);
  }

  static description = "Kaboom! U R DED!";
  static aliases = [];
}

export default KaboomCommand;
