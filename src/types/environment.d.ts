import { BuildMode } from "config/build/types/config";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODE?: BuildMode;
      PORT?: number;
    }
  }
}

export {};
