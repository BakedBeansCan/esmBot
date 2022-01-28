import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class FBICommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Pixel-Pig.mp3", this.message);
  }

  static description = "Plays the song 'Pixel Pig' which has no furry animation associated with it what-so-ever";
  static aliases = ["RS"];
}

export default FBICommand;
