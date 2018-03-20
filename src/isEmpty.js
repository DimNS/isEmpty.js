(function() {
    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;
    if (!window.hasOwnProperty('isNotEmpty')) window.isNotEmpty = isNotEmpty;

    /**
     * Javascript empty value checker
     *
     * @param {null|undefined|number|string|object|array} value
     *
     * @version 20.03.2018
     * @author DimNS <atomcms@ya.ru>
     */
    function isEmpty(value) {
        if (value === null) {
            return true;
        }

        switch (typeof(value)) {
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
                console.log('Undefined value type', 'isEmpty.js');
                return false;
        }
    }
})();