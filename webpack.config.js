const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-arcade-physics.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app.ts')
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader', exclude: '/node_modules/' },
      {
        test: /pixi\.js/,
        use: {
          loader: 'expose-loader',
          options: {
            exposes: ["PIXI"],
          },
        }
      },
      {
        test: /p2\.js$/,
        use: {
          loader: 'expose-loader',
          options: {
            exposes: ["p2"],
          },
        }
      },
      {
        test: /phaser-arcade-physics\.js/,
        use: {
          loader: 'expose-loader',
          options: {
            exposes: ["Phaser"],
          },
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'phaser-ce': phaser,
      'pixi': pixi,
      'p2': p2,
    }
  },
  mode: "development"
};