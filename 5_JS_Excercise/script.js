/**
         * API
         */
const API = (() => {
    const data = {
        1: {
            id: 1,
            title: "Title 1",
            description: 'This is description for title 1...'
        },
        2: {
            id: 2,
            title: "Title 2",
            description: 'This is description for title 2...'
        },
        3: {
            id: 3,
            title: "Title 3",
            description: 'This is description for title 3...'
        },
        4: {
            id: 4,
            title: "Title 4",
            description: 'This is description for title 4...'
        },
    };

    return {
        data,
    };
})();

/** 
 * Model
 */
const Model = ((api) => {
    const { data } = api;

    return {
        data,
    };
})(API);

/** 
 * View
 */
const View = (() => {
    const domstr = {
        list: "#list",
    };

    const createTmp = (data) => {
        let tmp = '';
        for (let ele in data) {
            tmp += 
            `
            <li id="item-${ele}" class="${ele == 1 ? 'expanded' : ''}">
                <p class="title" data-id="${ele}">${data[ele].title} <span class="icon" data-id="${ele}">${ele == 1 ? 'Collapse' : 'Expand'}</span></p>
                <div id="desc-${ele}" class="desc">Description: ${data[ele].description}</div>
            </li>
            `;
        };
        return tmp;
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
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
    const init = () => {
        const ele = document.querySelector(view.domstr.list);
        const tmp = view.createTmp(model.data);
        view.render(ele, tmp);

        ele.addEventListener('click', (event) => {
            if (event.target && event.target.classList.contains('icon')) {
                const id = event.target.getAttribute('data-id');
                handleToggle(id);
            }
        });
    };

    const handleToggle = (id) => {
        const multiple = document.getElementById('multiple').checked;
        const item = document.getElementById(`item-${id}`);
        const isExpanded = item.classList.contains('expanded');

        if (!multiple) {
            document.querySelectorAll('.expanded').forEach(expandedItem => {
                if (expandedItem !== item) {
                    expandedItem.classList.remove('expanded');
                    expandedItem.querySelector('.icon').textContent = 'Expand';
                }
            });
        }

        if (isExpanded) {
            item.classList.remove('expanded');
            item.querySelector('.icon').textContent = 'Expand';
        } else {
            item.classList.add('expanded');
            item.querySelector('.icon').textContent = 'Collapse';
        }
    };

    return {
        init,
    };
})(View, Model);

Controller.init();