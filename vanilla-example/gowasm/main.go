package main

import (
	"fmt"
	"syscall/js"
)

var htmlString = `<h4> GO wrote this</h4>`

func getHtml() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return htmlString
	})
}

func main() {
	ch := make(chan struct{}, 0)
	fmt.Println("Hello, World!")
	js.Global().Set("getHtml", getHtml())
	<-ch
}
