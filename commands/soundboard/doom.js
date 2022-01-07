import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class DoomCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Doom.m4a", this.message);
  }

  static description = "Doom Eternal Moment";
  static aliases = [];
}

export default DoomCommand;
