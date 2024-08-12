from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/form', methods=['POST'])
def handle_form():
    data = request.json
    # 受信したデータをコンソールに出力
    print("Received data:", data)  # デバッグ用の行
    return jsonify({"message": "Form submitted successfully"}), 200

if __name__ == '__main__':
    print("Starting Flask server...")  # デバッグ用の行
    app.run(debug=True)