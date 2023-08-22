const timer = ms => new Promise(res => setTimeout(res, ms))
for(var i = 0; i<1; i++){
    await timer(10000);
}
