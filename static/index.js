(() => {

    let postOperation = (url, operation) => {
        // ヘッダーやボディを作成
        const optParam = {
            headers: {
            'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(operation),
            method: 'POST'
        }

        // リクエストを送信
        return fetch(url, optParam)
        .then(data => {
            return data.json()
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // ボタンの有効・無効を変更
    let toggleBtn = () => {
        document.querySelectorAll('.ope-btn').forEach((btn) => {
            btn.disabled = !btn.disabled
        })
    }

    const btnOn = document.querySelector('#on')
    btnOn.addEventListener('click', async () => {
        console.log("Start On Event")

        // 指定されたIPアドレスからURLを作成
        let ip = document.querySelector('#raspi-ip').value
        const url = 'http://' + ip + '/switch'
        console.log("URL: "+url)
            
        const operation = {
            operate: "on"
        }
        toggleBtn()
        await postOperation(url, operation)
        toggleBtn()

        console.log("End On Event")
    })

    const btnOff = document.querySelector('#off')
    btnOff.addEventListener('click', async () => {
        console.log("Start Off Event")

        // 指定されたIPアドレスからURLを作成
        let ip = document.querySelector('#raspi-ip').value
        const url = 'http://' + ip + '/switch'
        console.log("URL: "+url)
    
        const operation = {
            operate: "off"
        }
        toggleBtn()
        await postOperation(url, operation)
        toggleBtn()

        console.log("End Off Event")
    })
  
})();