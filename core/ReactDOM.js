import React from "./React.js"

const ReactDOM = {
    createRoot(container){
        return {
            render(vdom) {
                React.render(vdom, container)
            }
        }
    }
}

export default ReactDOM