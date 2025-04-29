import type { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  resolve: {
    alias: {
      '@workspace/ui': path.resolve(__dirname, '../../packages/ui'),
    },
  },
};

export default config; 