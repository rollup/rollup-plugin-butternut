# rollup-plugin-butternut

Compress JavaScript with [Butternut](https://github.com/Rich-Harris/butternut).


## Installation

```bash
npm install --save-dev rollup-plugin-butternut
```


## Usage

```js
// rollup.config.js
import butternut from 'rollup-plugin-butternut';

export default {
  entry: 'src/main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [ butternut() ]
};
```

## License

[MIT](LICENSE)
