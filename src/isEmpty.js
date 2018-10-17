(function () {
    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;

    /**
     * Javascript empty value checker
     *
     * @param {null|undefined|number|string|object|array} value
     *
     * @version 17.10.2018
     * @author  DimNS <atomcms@ya.ru>
     */
    function isEmpty(value) {
        if (value === null) {
            return true;
        }

        var type = typeof(value);

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

            default:
                console.log('Undefined value type: "' + type + '"', 'isEmpty.js');
                return false;
        }
    }
})();