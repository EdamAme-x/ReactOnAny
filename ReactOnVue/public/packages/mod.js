window.document.body.querySelectorAll("ReactOnAny").forEach(Element => {
    const code = Element.innerHTML;
    const props = Element.getAttribute("props") === "" || !Element.getAttribute("props") ? "{}" : JSON.parse(Element.getAttribute("props"));
    const root = Element.getAttribute("root") === "" || !Element.getAttribute("root") ? "App" : Element.getAttribute("root");

    const ID = "_ReactOnAny_" + (Date.now().toString(16) + Math.random().toString(16)).toString(36);

    if (!document.getElementById("__ReactOnAny")) {
        const react_CDN_URL = "https://unpkg.com/react@18/umd/react.production.min.js";
        const reactDOM_CDN_URL = "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";
        const babel_CDN_URL = "https://unpkg.com/@babel/standalone/babel.min.js";

        const script_Path = `
            <script src="${react_CDN_URL}" id="__ReactOnAny"></script>
            <script src="${reactDOM_CDN_URL}" id="__ReactOnAny"></script>
            <script src="${babel_CDN_URL}" id="__ReactOnAny"></script>
        `;

        document.body.innerHTML += script_Path;
    }

    Element.id = ID;

    const moduleCode = `
    <script type="text/babel">

    console.log("ReactOnAny dispatched: " + ${ID});

        ${code}

        ReactDOM.render(
            ${root}(${props}), document.getElementById('${ID}') 
        )

    </script>
    `.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

    console.log(moduleCode);

    document.body.innerHTML += moduleCode;
})