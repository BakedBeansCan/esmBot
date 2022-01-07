import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class FBICommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Regular Show Intro sound effect.m4a", this.message);
  }

  static description = "Plays the Regular Show Intro sound effect";
  static aliases = ["RS"];
}

export default FBICommand;
