# Easystore

## Install

```
npm install easystore --save
```

## Quik start
```
<script type="text/javascript" src="./easystore.js"></script>
```
or
```
import easystore from 'easystore'
```

## Save data
```
// add multiple data
easystore.add({
    'number': 1,
    'string': 'value',
    'object': {msg:'value'},
    'boolean': true
})
// add single data
easystore.add('keyName', 'value')
// add expired data
easystore.add('keyName', 'value', 10) // The data will be destoryed in 10s
```

## Read data
```
easystore.get('keyName')
```

## Delete data
```
easystore.del('keyName')
```

## Delete all data
```
easystore.clear()
```
