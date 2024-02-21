// src/components/TTop.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
const Top = () => {
  return (
    <div>
      <h1>託送業務システム</h1>
      <p>情報の漏洩は、あなたや当社の信用を失うことになります。<br></br>
         システムの利用実態を常に記録しています。</p>
      <Box display="flex" justifyContent="left">
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }} component={Link} to="/keiyaku">契約管理</Button>
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }}component={Link} to="/kenshin">検針値収集</Button>
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>同時同量支援</Button>
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>低圧電源</Button>
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>料金算定補助</Button>
        <Button variant="contained" color="primary" style={{ marginRight: '20px' }}>帳票出力</Button>
        <Button variant="contained" color="primary" >低圧託送</Button>
      </Box>
    </div>
  );
};

export default Top;
