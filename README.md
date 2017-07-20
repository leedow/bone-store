# Bone-store

## Install

```
npm install bone-store --save
```

## Quik start
```javascript
<script type="text/javascript" src="./bonestore.min.js"></script>
```
or
```javascript
import bonestore from 'bone-store'
```

## Save data
```javascript
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
Return `false` if data dose not exsit
```javascript
bonestore.get('keyName')
```

## Delete data
```javascript
bonestore.del('keyName')
```

## Delete all data
```javascript
bonestore.clear()
```
