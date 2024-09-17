module.exports = {

    /**
     * @example
     * {{#equal value1 value2}}
     *   <p>value1 equal value2</p>
     * {{else}}
     *   <p>value1 not equal value2</p>
     * {{/equal}}
     */
    equal: (a, b, options) => {
        if (a === b) {
            return options.fn(this);
        }

        return options.inverse(this);
    },

    /**
     * @example
     * {{#neq value1 value2}}
     *   <p>value1 not equal value2</p>
     * {{else}}
     *   <p>value1 equal value2</p>
     * {{/neq}}
     */
    neq: (a, b, options) => {
        if (a !== b) {
            return options.fn(this);
        }

        return options.inverse(this);
    },

    /**
     * @example
     * {{#ifGreaterThan value1 value2}}
     *   <p>value1 is greater than value2</p>
     * {{else}}
     *   <p>value1 is not greater than value2</p>
     * {{/ifGreaterThan}}
     */
    ifGreaterThan: (a, b, options) => {
        if (a > b) {
            return options.fn(this);
        }
        return options.inverse(this);
    },

    /**
     * @example
     * {{#ifLessThan value1 value2}}
     *   <p>value1 is less than value2</p>
     * {{else}}
     *   <p>value1 is not less than value2</p>
     * {{/ifLessThan}}
     */
    ifLessThan: (a, b, options) => {
        if (a < b) {
            return options.fn(this);
        }
        return options.inverse(this);
    },

    /**
     * @example
     * {{#each range 10}}
     *   <li>{{this}}</li>
     * {{/each}}
     */
    range: (n) => {
        return Array.from({ length: n }, (_, i) => i + 1);
    },
};