(function(){
  var easystore = {
    // switch of console.log
    log: true,
    // save data into localstorage
  	add: function(data){
			for(key in data){
				this._save(key, data[key])
			}
  	},
  	get: function(key){
      if(!this._check()) return

  		var data = localStorage[key]
      var result = ''

      try{

        data = JSON.parse(data)

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

        this._log('Read data: '+key+' failed')
      }

      return result
  	},
    // save data and tag type
    _save: function(key, value){
      if(!this._check()) return

      var str = JSON.stringify({
        value: value,
        type: typeof value
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
    _isArray: function(o){
      return Object.prototype.toString.call(o) === '[object Array]'
    },
    _log: function(msg){
      if(this.log){
        console.log('Easystore ', msg)
      }
    }
  }

  if(typeof module != 'undefined'){
      module.exports = easystore
  } else {
    window.easystore = easystore
  }



})()
