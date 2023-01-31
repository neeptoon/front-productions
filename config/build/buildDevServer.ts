import webpack from 'webpack';
import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguretion } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguretion {
    return {
        port: options.port,
        open: true,
    }
}
