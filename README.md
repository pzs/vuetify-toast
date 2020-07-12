# Vuetify Toast

> Simple toast service based on [Vuetify](https://github.com/vuetifyjs/vuetify) snackbar component. (<1kB gzip)

for [Vuetify](https://github.com/vuetifyjs/vuetify) version 1.x

## Installation

```bash
npm install --save vuetify-toast
```

## Demo

Demo: https://pzs.github.io/vuetify-toast


## Usage

### Bundler (Webpack, Rollup)

```js
import vuetifyToast from 'vuetify-toast'

vuetifyToast.info('This is an info toast');

vuetifyToast.success('The document has been saved.');

vuetifyToast.show({
    text: 'Test message',
    icon: 'information',
    color: 'warning',
    timeout: 10000,
    dismissible: false
});
```

### Browser

```html
<!-- Include after Vue and Vuetify -->

<!-- Local files -->
<script src="vuetify-toast/dist/vuetify-toast.js"></script>

<!-- Or from CDN -->
<script src="https://unpkg.com/vuetify-toast"></script>

<script>
    vuetifyToast.success('Awesome!');
</script>
```


## Documentation

### Methods

- `vuetifyToast.show(options)`
- `vuetifyToast.success(text, [options])`
- `vuetifyToast.error(text, [options])`
- `vuetifyToast.info(text, [options])`
- `vuetifyToast.close()`


### Options

- `text` (String) The text to show in the snackbar
- `icon` (String) If you want to use an icon to the left in the snackbar
- `color` (String) Color of the snackbar, you can use any valid [vuetify class](https://vuetifyjs.com/style/colors). Default `'info'`
- `timeout` (Number) Timeout in milliseconds, default: `3000`
- `dismissible` (Boolean) default `true`


### Default options

You can override the default options at any time:

```js
vuetifyToast.defaultOptions.timeout = 5000;
```


## Development

### Build

Bundle the js of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
