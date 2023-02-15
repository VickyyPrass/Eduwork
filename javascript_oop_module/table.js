class TableApp {
    constructor(initial) {
        this.initial = initial;
    }

    createHeaderTable(dataHeader) {
        let headerOpenTag = `<thead><tr class="text-center">`;
        let headerCloseTag = `</tr></thead>`;

        dataHeader.forEach((elementHeader) => {
            headerOpenTag += `<th scope="col">${elementHeader}</th>`;
        });

        return headerOpenTag + headerCloseTag;
    }

    createBodyTable(dataBody) {
        let bodyOpenTag = `<tbody>`;
        let bodyCloseTag = `</tbody>`;

        dataBody.forEach((elementBody) => {
            bodyOpenTag += `
            <tr>
                <td>${elementBody[0]}</td>
                <td>${elementBody[1]}</td>
                <td>${elementBody[2]}</td>
            </tr>
            `;
        });

        return bodyOpenTag + bodyCloseTag;
    }

    render(element) {
        let eltable = `
        <table class="table table-bordered table-dark table-hover mt-5">
            ${this.createHeaderTable(this.initial.columns)}
            ${this.createBodyTable(this.initial.data)}
        </table>
        `;

        element.innerHTML = eltable;
    }
}

export { TableApp };
