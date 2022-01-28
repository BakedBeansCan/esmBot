import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class WinXPCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/pvztrap.mp3", this.message);
  }

  static description = "Plays the PvZ Trap Remix";
  static aliases = ["pvz"];
}

export default WinXPCommand;
