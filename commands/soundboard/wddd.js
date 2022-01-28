import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class DogDoinCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/dogdoin.m4a", this.message);
  }

  static description = "What da dog doin?";
  static aliases = [];
}

export default DogDoinCommand;
