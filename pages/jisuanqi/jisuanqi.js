// pages/jisuanqi/jisuanqi.js
Page({
  data: {
    num: '',
    num2: '',
    fun: '',
    equal: '',
    v: false
  },
  onLoad: function (options) {

  },
  clear() {
    this.setData({
      num: '',
      num2: '',
      fun: '',
      equal: '',
      v: false
    })
  },
  numFn(e){
    let oldNum
    if (this.data.v) {
      oldNum = this.data.num2;
    } else {
      oldNum = this.data.num;
    }
    let iptNum = e._relatedInfo.anchorTargetText
    if ((oldNum == '0' && iptNum == '0') || (oldNum.includes('.') && iptNum == '.')) {
      return false
    }
    let newNum = oldNum + iptNum;
    if (this.data.v) {
      this.setData({
        num2: newNum
      });
    } else {
      this.setData({
        num: newNum
      });
    }

  },
  calcu(e) {
    let fun = e._relatedInfo.anchorTargetText;
    let num = this.data.num;
    if (this.data.num && this.data.num2 && (this.data.v) ) {
      num = this.suan(this.data.num-0, this.data.num2-0, this.data.fun)
    }
    let v = true
    this.setData({
      fun: fun,
      num: num,
      num2: '',
      v: v
    });
  },
  equFn(e) {
    let num = this.data.num - 0;
    let num2 = this.data.num2 - 0;
    let fun = this.data.fun;
    let equ = this.data.equal || 0;
    equ = this.suan(num, num2, fun)
    this.setData({
      num: equ,
      v: false
    });
  },
  suan(num, num2, fun) {
    let equ = 0;
    if (fun == '+') {
      equ = num + num2;
    } else if (fun == '-') {
      equ = num - num2;
    } else if (fun == '*') {
      equ = num * num2;
    } else if (fun == '/') {
      equ = num / num2;
    }
    return equ
  },
  back(e){
    let numbr
    if( this.data.v ){
      numbr = 'num2'
    } else{
      numbr = 'num'
    }
    let thisnum = this.data[numbr] + ''
    if (thisnum) {
      thisnum = thisnum.slice(0, thisnum.length - 1)
    }
    if (this.data.v) {
      this.setData({
        num2: thisnum
      });
    } else {
      this.setData({
        num: thisnum
      });
    }
  }
})