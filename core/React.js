function sun(a, b) {
    return a + b
}

function createTextNode(nodeValue) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: nodeValue,
            children: []
        }
    }
}

function createElement(type,props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                if(typeof child ==='object'){
                    return child
                }else{
                    return createTextNode(child)
                }
            })
        }
    }
}

function render(vdom, container) {
    let dom
    if(vdom.type === 'TEXT_ELEMENT') {
        dom = document.createTextNode('')
    } else {
        dom = document.createElement(vdom.type)
    }

    Object.keys(vdom.props).forEach(key => {
        if(key != 'children') {
            dom[key] = vdom.props[key]
        }
    })

    vdom.props.children.forEach(child => {
        render(child, dom)
    })

    container.appendChild(dom)
}

const React = {
    createElement,
    render,
    sun
}

export default React