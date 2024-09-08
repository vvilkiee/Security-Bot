/** @format */
console.log(`
 __   __   __   __   __     __         __  __     __  __     ______     ______     ______    
/\ \ / /  /\ \ / /  /\ \   /\ \       /\ \/ /    /\ \_\ \   /\  == \   /\  __ \   /\  __ \   
\ \ \'/   \ \ \'/   \ \ \  \ \ \____  \ \  _"-.  \ \____ \  \ \  __<   \ \  __ \  \ \  __ \  
 \ \__|    \ \__|    \ \_\  \ \_____\  \ \_\ \_\  \/\_____\  \ \_\ \_\  \ \_\ \_\  \ \_\ \_\ 
  \/_/      \/_/      \/_/   \/_____/   \/_/\/_/   \/_____/   \/_/ /_/   \/_/\/_/   \/_/\/_/`);

const { vvilkyraa } = require('./src/client');
const client = new vvilkyraa();
client.connect();
module.exports = client;
console.log(`Made By vvilkyraa`)
