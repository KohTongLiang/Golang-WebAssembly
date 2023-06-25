# WASM With GO

Sample project for using Go with WebAssembly and loading WASM module in vanilla JavaScript.

## Change Go's Compilation target to WebAssembly

1. Run ```GOOS=js GOARCH=wasm go build -o main.wasm```

Note that you can only compile main packages. Otherwise, you will get an object file that cannot be run in WebAssembly. If you have a package that you want to be able to use with WebAssembly, convert it to a main package and build a binary. Make sure its in the same folder as the index.html

2. Run ```cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .``` to copy the JavaScript support file. Make sure its in the same folder as the index.html
3. Create a index.html
4. Run the server script to serve the HTML file
 and loading WASM module in vanilla JavaScript.