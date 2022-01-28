import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class BoomCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/Selection Sorting Algorithm Sound Effect.m4a", this.message);
  }

  static description = "Plays the Selection Sorting Algorithm Sound Effect";
  static aliases = ["sort"];
}

export default BoomCommand;
