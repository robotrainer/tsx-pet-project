import { BuildOptions } from "./types/config";
import type {Configuration as DevServerCofiguration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerCofiguration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
  }
}