# isEmpty.js

### **`isEmpty(value)`**
Check for empty value (null, undefined, number, string, object or array).

## Usage

```bash
bower install --save isEmpty.js
```

```html
<script type="text/javascript" src="bower_components/isEmpty.js/dist/isEmpty.min.js">
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
</script>
```