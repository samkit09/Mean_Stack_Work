/** 
 * Model
 */
const Model = (() => {
    const dataObj = {};

    return {
        dataObj,
    };
})();

/** 
 * View
 */
const View = (() => {
    const domstr = {
        formWrap: "#form-wrap",
        form: "form", 
    };

    const createTmp = (data) => {
        let tmp = '<form action="submit()">';
        for (let ele in data) {
            tmp += 
            `
            <label for="${ele}"> ${ele} </label>
            <input type="text" id="${ele}" name="${ele}" placeholder="${ele}">
            </br>
            `;
        };
        tmp += '</form>'
        return tmp;
    };

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    };

    return {
        render,
        domstr,
        createTmp,
    };
})();

/** 
 * Controller
 */
const Controller = ((view, model) => {
    const dataObj = {
        name: "Samkit",
        phone: "12345678900",
        email: "samkit.saraf@gmail.com",
        address: "123 Park Avenue, Dallas",
    }

    const init = () => {
        model.dataObj = dataObj;
        const ele = document.querySelector(view.domstr.formWrap);
        const tmp = view.createTmp(model.dataObj);
        view.render(ele, tmp);

        const data = Object.keys(model.dataObj);
        data.forEach((elem) =>{
            let ele = document.getElementById(elem);
            console.log(ele)
            ele.value = model.dataObj[elem];
        });
        
    };

    return {
        init,
    };
})(View, Model);

Controller.init();