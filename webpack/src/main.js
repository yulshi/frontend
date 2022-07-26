import * as dd from 'dingtalk-jsapi'

window.getDingTalkAuthCode = function () {
  dd.runtime.permission.requestAuthCode({
    corpId: "dinge78925b0163ef90b", // 企业id
    onSuccess: function (info) {
      // 通过该免登授权码可以获取用户身份
      window.dingtalkCode = info.code;
    },
    onFail: function (err) {
      console.log("获取钉钉免登授权码失败：" + JSON.stringify(err))
      window.dingtalkCode = ''
    }
  });
}

