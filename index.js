(function(){
  var easystore = {
    // switch of console.log
    log: true,
    /**
     * @params key, value, expire | data
     */
  	add: function(d1, d2, e){
      var alen = arguments.length
      try{
        if(alen === 1){
          for(key in d1){
            this._save(key, d1[key], 0)
          }
        } else {
          this._save(d1, d2, e||0)
        }
      } catch(e){
        this._log('add failed')
        return false
      }

      return true

  	},
  	get: function(key){
      if(!this._check()) return

  		var data = localStorage[key]
      var result = ''

      try{
        data = JSON.parse(data)
        if(new Date().getTime()/1000 - data.addtime > data.expire && data.expire>0){
          this.del(key)
          return false
        }
        switch(data.type){
          case 'number': {
            result = data.value - 0
            break
          }
          case 'object': {
            result = eval(data.value)
            break
          }
          case 'string': {
            result = data.value
            break
          }
          case 'boolean': {
            result = eval(data.value)
            break
          }
          default: {
            result = data.value
          }
        }
      } catch(e) {
        this._log(''+key+' dose not exsit')
        return false
      }

      return result
  	},
    del: function(key){
      localStorage.removeItem(key)
    },
    clear: function(){
      localStorage.clear()
    },
    // save data and tag type
    _save: function(key, value, expire){
      if(!this._check()) return

      var str = JSON.stringify({
        value: value,
        type: typeof value,
        addtime: parseInt(new Date().getTime()/1000),
        expire: expire||0
      })

      localStorage[key] =  str
      this._log('saving success:' + key + ' - ' + localStorage[key])
    },
  	_check: function(){
  		if(window.localStorage){
  			return true;
  		} else {
  			this._log('localStorage unsupported');
  			return false;
  		}
  	},
    _log: function(msg){
      if(this.log){
        console.log('Easystore:', msg)
      }
    }
  }

  if(typeof module != 'undefined'){
    module.exports = easystore
  } else {
    window.easystore = easystore
  }

})()
