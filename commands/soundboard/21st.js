import { play } from "../../utils/soundplayer.js";
import MusicCommand from "../../classes/musicCommand.js";

class BoiCommand extends MusicCommand {
  async run() {
    return await play(this.client, "./assets/audio/21st.ogg", this.message);
  }

  static description = "Plays the entirety of 21st century humor";
  static aliases = ["21st"];
}

export default BoiCommand;
