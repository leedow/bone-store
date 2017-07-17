# Bone-store

## Install

```
npm install bone-store --save
```

## Quik start
```
<script type="text/javascript" src="./bonestore.min.js"></script>
```
or
```
import bonestore from 'bone-store'
```

## Save data
```
// add multiple data
bonestore.add({
    'number': 1,
    'string': 'value',
    'object': {msg:'value'},
    'boolean': true
})
// add single data
bonestore.add('keyName', 'value')
// add expired data
bonestore.add('keyName', 'value', 10) // The data will be destoryed in 10s
```

## Read data
```
bonestore.get('keyName')
```

## Delete data
```
bonestore.del('keyName')
```

## Delete all data
```
bonestore.clear()
```
