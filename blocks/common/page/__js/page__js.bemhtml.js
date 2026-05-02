// Mark every <script> emitted via { elem: 'js', url } as type="module".
// All client JS in this project is shipped as ES modules with code-splitting
// (see scripts/vite-client.config.mjs); the chunks/ directory next to
// client.js is loaded by the browser via dynamic import only when needed.
block('page').elem('js')(
    addAttrs()({ type: 'module' })
);
