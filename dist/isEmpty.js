(function () {
    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;
    if (!window.hasOwnProperty('notEmpty')) window.notEmpty = notEmpty;

    /**
     * Javascript empty value checker
     *
     * @param {null|undefined|number|string|object|array|function|boolean} value
     *
     * @return {boolean}
     *
     * @version 07.02.2019
     * @author  DimNS <atomcms@ya.ru>
     */
    function isEmpty(value) {
        if (value === null) {
            return true;
        }

        var type = typeof (value);

        switch (type) {
            case 'undefined':
                return true;

            case 'number':
                return isNaN(value);

            case 'string':
                return value.trim() === '';

            case 'object':
                var countKeys = Object.keys(value).length;
                return countKeys < 1;

            case 'function':
            case 'boolean':
                return false;

            default:
                console.log('Unknown value type: "' + type + '"', 'isEmpty.js');
                return false;
        }
    }

    /**
     * Javascript not empty value checker
     *
     * @param {null|undefined|number|string|object|array|function|boolean} value
     *
     * @return {boolean}
     *
     * @version 15.07.2019
     * @author  DimNS <atomcms@ya.ru>
     */
    function notEmpty(value) {
        return !isEmpty(value);
    }
})();