# isEmpty.js

### **`isEmpty(value)`**
Check for empty value (null, undefined, number, string, object or array).

## Install
```bash
npm i dimns-is-empty-js
```

## Usage
```html
<script type="text/javascript" src="dist/isEmpty.min.js">
<script type="text/javascript">
    // true
    console.log(isEmpty(null));
    console.log(isEmpty(undefined));
    console.log(isEmpty(NaN));
    console.log(isEmpty(''));
    console.log(isEmpty('    '));
    console.log(isEmpty({}));
    console.log(isEmpty([]));

    // false
    console.log(isEmpty('null'));
    console.log(isEmpty('undefined'));
    console.log(isEmpty(0));
    console.log(isEmpty(123));
    console.log(isEmpty('  spaces '));
    console.log(isEmpty({'1': '111', '2': '222'}));
    console.log(isEmpty(['111', '222']));
    console.log(isEmpty(function() {}));
    console.log(isEmpty(true));
    console.log(isEmpty(false));
</script>
```