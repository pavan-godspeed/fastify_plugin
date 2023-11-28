const {GSStatus} = require('@godspeedsystems/core');

module.exports = async(ctx)=>{
    return new GSStatus(true, 200, undefined, "hello world", undefined);
}; 