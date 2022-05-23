// express 모듈 호출
const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

// api 처리는 './routes/index'에서 일괄처리
app.use('/api', api);
app.use(cors())
// server port 5000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server run` + process.env.PORT)
    console.log(`Server run` + PORT)
})