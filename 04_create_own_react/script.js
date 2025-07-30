//? create own react js -------------------------------------------------------------->

// react render function v1 --------------------->
function customRender(ele, dom) {
    const createTag = document.createElement(ele.tagName);
    createTag.innerHTML = ele.children;
    createTag.setAttribute('href', ele.props.href);
    createTag.setAttribute('target', ele.props.target);

    dom.appendChild(createTag);
};

// react render function v2 --------------------->
function customRender(ele, dom) {
    const createTag = document.createElement(ele.tagName);
    createTag.innerHTML = ele.children;
    for (const prop in ele.props) {
        if (prop === 'children') continue;
        createTag.setAttribute(`${prop}`, ele.props[prop]);
    };

    dom.appendChild(createTag);
};

// create an object ----------------------------->
const reactElement = {
    tagName: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit Google'
};

const domElement = document.getElementById('root');
customRender(reactElement, domElement);