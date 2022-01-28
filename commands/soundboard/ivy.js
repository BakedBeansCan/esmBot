import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class IvyCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/ivy.mp3", this.message);
  }

  static description = "Ivy's New hit song 😳";
  static aliases = ["ivy"];
}

export default IvyCommand;
