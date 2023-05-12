import requests

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
	# トップページを返却
	return render_template('index.html')

@app.route("/switch", methods=['POST'])
def operateSwitch():
	# ここに受け取ったJSONを検証→スマートプラグへリクエストを送るコードを記述
	# passは消してください。
	pass

def main():
	# Flaskサーバを外部アクセス許可モードで起動
	app.run(host="0.0.0.0")

if __name__ == '__main__':
	main()
